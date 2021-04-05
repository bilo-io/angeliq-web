// #region Modules
import React, {
    useState,
    useEffect,
    useRef
} from 'react'
import FAIcon from 'react-fontawesome'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Highlight from 'react-highlight-words'
// #endregion

// #region Components
import { ActionModal } from 'components/modal'
import {
    Accordion,
    ActionButtons,
    DocIndex,
    EditInline,
    Explorer,
    Layout,
    SearchResource
} from 'components'
import { Guide } from './guide'
// #endregion

// #region Misc
import {
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import { Speech } from 'util/speech'
import { appendDateTime } from 'util/date'
import { byField } from 'util/sort'
import { getSlidesSpecs } from 'util/slides'
import options from './config'
import api from 'util/api'
import SlideshowService from './service'
const service = new SlideshowService()
// #endregion

const mapStateToProps = state => ({
    slideshows: state.session.slideshows,
    slideshow: state.session.slideshow
})

const mapActionsToProps = dispatch => bindActionCreators({
    addToast,
    setVideoModal
}, dispatch)

const speech = new Speech('en-US', 'Samantha')

export const Slideshows = (props) => {
    // #region STATE
    const [isLoading, setIsLoading] = useState(true)
    const [slideshow, setSlideshow] = useState({})
    const [slideshows, setSlideshows] = useState([])
    const [slideshowCollections, setSlideshowCollections] = useState([])
    const [isAddingCollection, setIsAddingCollection] = useState(true)
    const [addToCollectionIndex, setAddToCollectionIndex] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState(appendDateTime('New Slides'))
    const [newCollectionName, setNewCollectionName] = useState('')
    const [activeModal, setActiveModal] = useState(null)
    const [addToCollectionId, setAddToCollectionId] = useState(null)
    // - Refs
    const explorer = useRef(null)
    const isSelected = Object.keys(slideshow).length > 0
    // #endregion

    // #region LIFECYCLE
    useEffect(() => {
        fetchResource()
    }, [])
    // #endregion

    // #region MISC
    const onChangeName = e => {
        const name = e.target.value
        setName(name)
        setSlideshow({
            ...slideshow,
            name
        })
    }
    const exportSlidesTo = (format) => () => {
        alert(`format ${format} not supported`)
    }

    const handleSetNewCollectionName = e => {
        setNewCollectionName(e.target.value)
    }

    const toggleAddToCollection = () => setIsAddingCollection(!isAddingCollection)

    const collectionToAdd = (i, collection) => () => {
        setAddToCollectionId(collection.id)
        setAddToCollectionIndex(i)
    }

    const shareButtonClassName = 'primary hollow flex-row'
    const shareButtonStyle = { marginBottom: '0.5em' }
    const {
        slidesCount,
        tilesCount,
        duration
    } = getSlidesSpecs(slideshow.slides)
    // #endregion

    // #region MODALS
    const showModal = (activeModal) => () => {
        setIsModalOpen(true)
        setActiveModal(activeModal)
    }
    const hideModal = () => {
        setIsModalOpen(false)
        setActiveModal(null)
    }
    // #endregion

    // #region RESOURCE
    const selectResource = (resource) => {
        setSlideshow(resource)
    }

    const cancelResource = () => {
        setSlideshow({})
        explorer.current.deselect()
    }

    // RESOURCE - CRUD
    const fetchResource = () => {
        setIsLoading(true)
        service.getAll()
            .then(data => {
                setSlideshows(data)
                setIsLoading(false)
            })
            .catch(api.handleError(props.addToast))
    }

    const addResource = () => {
        const slideshow = {
            name,
            pages: []
        }

        if (addToCollectionId) {
            slideshow.collectionId = addToCollectionId
        }

        service.create(slideshow)
            .then(response => {
                cancelResource()
                fetchResource()
                props.addToast({
                    type: 'success',
                    content: <div>Slideshow was successfully created</div>
                })
            })
            .catch(api.handleError(props.addToast))
    }

    const openResource = (resource) => () => {
        props.history.push(`/app/slides/slideshows/edit/${resource.id}`)
    }

    const saveResource = () => {
        this.props.addToast({
            type: 'warning',
            content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
        })
        SlideshowService.updateSlideshow(slideshow.id, {
            ...slideshow
        })
            .then(response => {
                fetchResource()
                props.addToast({
                    type: 'success',
                    content: <div>Slideshow was successfully saved</div>
                })
            })
            .catch(api.handleError(props.addToast))
    }

    const deleteResource = () => {
        this.props.addToast({
            type: 'warning',
            content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
        })
        SlideshowService.deleteSlideshow(slideshow.id)
            .then(response => {
                fetchResource()
                props.addToast({
                    type: 'success',
                    content: <div>Slideshow was successfully deleted</div>
                })
            })
            .catch(api.handleError(props.addToast))
    }
    // #endregion

    // #region RENDER
    return <div className='page'>
        <Layout
            isRightDark={ !isSelected }
            leftDiv={
                <div>
                    <div className='page-header padded flex-row space-between'>
                        <div className='flex-row auto-scroll-x'>
                            <FAIcon className='icon' name={ options.icon } />
                            <br />
                            <div className='title'>{ options.name }</div>
                        </div>
                        <div>
                            <button
                                className='primary hollow action-button'
                                onClick={ () => {
                                    setIsAddingCollection(false)
                                    showModal('create')()
                                }}>
                                <div className='icon'>
                                    <FAIcon name='plus-circle' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='divider horizontal'/>
                    <Explorer
                        ref={ explorer }
                        showPath
                        rootPath={'slideshows/'}
                        name={'Slideshows'}
                        resources={ slideshows }
                        collections={ slideshowCollections }
                        resourceIcon={ options.icon }
                        onClickItem={ selectResource }
                        isLoading={ isLoading }
                    />
                </div>
            }
            rightDiv={ <div>
                <div className='page-header padded'>
                    {
                        slideshow && Object.keys(slideshow).length > 0
                            ? <div className='full-width flex-row space-between'>
                                <EditInline
                                    value={ slideshow.name }
                                    onChange={ onChangeName }
                                />
                                <div>
                                    <ActionButtons
                                        onSave={ showModal('save') }
                                        onRemove={ showModal('remove') }
                                        onClose={ showModal('close') }
                                    />
                                </div>
                            </div>
                            : <div>Get Started</div>
                    }
                </div>
                <div className='divider horizontal' />
                <div>
                    {
                        isSelected
                            ? <div className='auto-scroll-y' style={{ position: 'relative', height: 'calc(100vh - 3rem)' }}>
                                <Accordion title='Summary' isOpenDefault={ true }>
                                    <div className='padded flex-row space-around'>
                                        <div>
                                            <div>Slides: { slidesCount }</div>
                                            <br />
                                            <div>Tiles: { tilesCount } </div>
                                            <br />
                                            <div>Duration: { duration } </div>
                                            <br />
                                        </div>
                                        <div>
                                            <button className='primary hollow flex-row space-between'
                                                onClick={ openResource(slideshow) }>
                                                <div style={{ marginLeft: '0.6rem', marginRight: '0.6rem' }}><FAIcon name='pen'/></div>
                                                <div style={{ paddingRight: '0.6rem' }}>Edit</div>
                                            </button>
                                        </div>
                                        <div>
                                            <img
                                                src={'https://i.pinimg.com/originals/0a/33/54/0a3354a75fdf3e201d823301073d8303.gif'}
                                                style={{
                                                    width: '8rem',
                                                    height: 'auto'
                                                    // position: 'absolute'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Accordion>
                                <div className='divider horizontal' />
                                <Accordion title='Share' isOpenDefault={ true }>
                                    <div className='padded flex-row'>
                                        {
                                            [
                                                { name: 'Preview', type: 'preview', icon: 'play' },
                                                { name: 'PDF Export', type: 'pdf', icon: 'file-pdf' },
                                                { name: 'Online Link', type: 'online', icon: 'globe' }
                                            ].map((exportFormat, i) => <div key={ exportFormat }>
                                                <button
                                                    className={ shareButtonClassName }
                                                    style={ shareButtonStyle }
                                                    onClick={ exportSlidesTo(exportFormat.type) }>
                                                    <div>&nbsp;&nbsp;<FAIcon name={exportFormat.icon}/></div>
                                                    <div>&nbsp;&nbsp;{exportFormat.name}</div>
                                                </button>
                                            </div>)
                                        }
                                    </div>
                                </Accordion>
                            </div>
                            : <Guide />
                    }
                </div>
            </div> }
        />
        <ActionModal
            isOpen={ isModalOpen }
            activeModal={ activeModal }
            resourceName='Schedule'
            onCancel={ hideModal }
            onAction={{
                save: saveResource,
                remove: deleteResource,
                create: addResource
            }}
            views={{
                save: <div>
                    <div>Saving will override the existing Schedule.</div>
                    <br />
                    <div>Are you sure?</div>
                </div>,
                close: <div>
                    <div>Leaving now will discard all unsaved changes!</div>
                    <br />
                    <div>Are you sure you want to leave the Schedule?</div>
                </div>,
                remove: <div>
                    <div>Deleting this Schedule cannot be undone!</div>
                    <br />
                    <div>Are you sure?</div>
                </div>,
                create: <div className='flex-column'>
                    <input
                        type='text'
                        defaultValue={ name }
                        onChange={ onChangeName }
                        className='full-width-padded'
                        placeholder='Slideshows name...'
                    />
                    <br />
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            checked={ isAddingCollection }
                            onChange={ toggleAddToCollection } />
                        <span>
                            Add to a <strong>&nbsp;<FAIcon name='folder' />&nbsp;&nbsp;Collection</strong>
                        </span>
                    </label>
                    {
                        isAddingCollection && <div style={{ marginTop: '1rem' }}>
                            <input
                                type='text'
                                onChange={ handleSetNewCollectionName }
                                className='full-width-padded'
                                placeholder='Collections name...'
                            />
                            <br />
                            <br />
                            OR select a collection:
                            <br />
                            <br />
                            {
                                isAddingCollection && <div>
                                    {
                                        slideshowCollections.map((collection, i) => (
                                            <label key={ collection.id }
                                                className={ 'sidebar-collection' }
                                                style={{ color: `${addToCollectionId === collection.id ? '#00adee' : 'initial'}` }}
                                                onClick={ collectionToAdd(i, collection) }
                                            >
                                                    &nbsp;&nbsp;
                                                <FAIcon name='folder' />
                                                    &nbsp;&nbsp;{ collection.name }
                                            </label>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>
            }}
        />
    </div>
    // #endregion
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Slideshows))
import React, { Component, createRef } from 'react'
import FAIcon from 'react-fontawesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Highlight from 'react-highlight-words'
import {
    Accordion,
    ActionButtons,
    ConfirmModal,
    DocIndex,
    EditInline,
    Explorer,
    Layout,
    SearchResource
} from 'components'
import {
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import firebase from 'util/firebase'
import { WidgetUpload } from 'widgets'
// NOTE: put get-started content into 'config.js'
import helpCreate from 'img/help/screens_create.gif'
import helpClient from 'img/help/screens_client.png'
import options from './config'

const mapStateToProps = state => ({
    schedules: state.session.schedules,
    schedule: state.session.schedule
})

const mapActionsToProps = dispatch => bindActionCreators({
    addToast,
    setVideoModal
}, dispatch)

export class Sources extends Component {
    constructor (props) {
        super(props)
        this.explorer = createRef()
    }

    state = {
        // resources
        isLoading: true,
        sources: [],
        sourcesCollections: [],
        // modals
        isAddModalOpen: false,
        isSaveResourceModalOpen: false,
        isCancelResourceModalOpen: false,
        isDeleteResourceModalOpen: false,
        // misc
        isMapOpen: false
    }

    componentDidMount () {
        firebase.REF('sourcesCollections')
            .on('value', snapshot => {
                const val = snapshot.val()
                if (val) {
                    this.setState({
                        sourcesCollections: Object.keys(val).map(key => ({ ...val[key], id: key }))
                    }, () => {
                        firebase.get('sources', snapshot => {
                            const val = snapshot.val()
                            const { sourcesCollections } = this.state
                            const sources = Object.keys(val).map(key => ({ ...val[key], id: key }))
                            this.setState({ sources, isLoading: false })
                        })
                    })
                } else {
                    console.log('UNDEFINED: ', val)
                    this.setState({
                        isLoading: false,
                        isEmpty: true
                    })
                }
            })
    }

    // #region MODALS
    toggleMap = () => this.setState({ isMapOpen: !this.state.isMapOpen })
    showAddModal = () => this.setState({ isAddModalOpen: true })
    hideAddModal = () => this.setState({ isAddModalOpen: false })
    showSaveResourceModal = () => this.setState({ isSaveResourceModalOpen: true })
    hideSaveResourceModal = () => this.setState({ isSaveResourceModalOpen: false })
    showCancelResourceModal = () => this.setState({ isCancelResourceModalOpen: true })
    hideCancelResourceModal = () => this.setState({ isCancelResourceModalOpen: false })
    showDeleteResourceModal = () => this.setState({ isDeleteResourceModalOpen: true })
    hideDeleteResourceModal = () => this.setState({ isDeleteResourceModalOpen: false })
    // #endregion MODALS

    setNewCollectionName = e => {
        this.setState({
            newCollectionName: e.target.value
        })
    }

    onChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    toggleAddToCollection = () => this.setState({ isAddingCollection: !this.state.isAddingCollection })
    collectionToAdd = (i, collection) => () => {
        this.setState({
            addToCollectionId: collection.id,
            addToCollectionIndex: i
        }, () => console.log(this.state.addToCollectionId))
    }

    // #region RESOURCE
    addResource = () => {
        const { name, addToCollectionId } = this.state
        const sources = {
            name,
            code: undefined,
            slideshows: [],
            scheduleId: undefined,
            status: {
                health: 'UNASSIGNED',
                storage: {
                    current: '0GB',
                    total: '1GB',
                    ratio: 0.25
                }
            },
            hardware: {
                aspectRatio: 16 / 9,
                resolution: {
                    width: 1920,
                    height: 1080
                }
            }
        }

        if (addToCollectionId) {
            sources.collectionId = addToCollectionId
        }
        firebase.REF('sources')
            .push()
            .set(sources)
    }

    selectResource = (resource) => {
        this.setState({
            source: resource
        }, () => console.log(resource))
    }

    saveResource = () => {
        this.props.addToast({
            type: 'success',
            content: <div>
                Saved Schedule
            </div>
        })
    }

    cancelResource = () => {
        this.setState({
            source: undefined
        })
        this.explorer.current.deselect()
    }

    deleteResource = () => {
        console.log('Modal: deleting source ', this.state.source)
    }

    // #endregion RESOURCE
    renderStatus = (status) => {
        let color

        switch (status) {
        case 'on': color = 'success'
            break
        case 'off': color = 'warning'
            break
        default: color = '#aaa'
        }

        return <span
            className={ color }
            style={{
                padding: '0 0.5rem 0 0.5rem',
                height: '2rem',
                lineHeight: '2rem',
                backgroundColor: color,
                borderRadius: '1rem',
                color: 'white'
            }}
        >
            { status.toUpperCase() }
        </span>
    }

    render () {
        const {
            isMapOpen,
            isAddModalOpen,
            isSaveResourceModalOpen,
            isCancelResourceModalOpen,
            isDeleteResourceModalOpen,
            isAddingCollection,
            addToCollectionId,
            source,
            // Explorer
            sources,
            sourcesCollections,
            isLoading
        } = this.state

        const toolbarStyle = {
            flexShrink: 1,
            marginTop: '0rem',
            marginLeft: '0.5rem',
            width: '2rem',
            height: 'calc(2rem - 1px)',
            borderColor: 'transparent'
        }
        const paddedSlot = {
            padding: 'calc(0.5rem - 0.5px)',
            paddingLeft: '1rem'
        }

        return <div className='page'>
            <Layout
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
                                        this.setState({ isAddingCollection: false }, this.showAddModal)
                                    }}>
                                    <div className='icon'>
                                        <FAIcon name='plus-circle' />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='divider horizontal'/>
                        <Explorer
                            ref={ this.explorer }
                            showPath
                            rootPath={'sources/'}
                            name={'Sources'}
                            resources={ sources }
                            collections={ sourcesCollections }
                            resourceIcon={ options.icon }
                            onClickItem={ this.selectResource }
                            isLoading={ isLoading }
                        />
                    </div>
                }
                rightDiv={
                    <div>
                        <div className='page-header padded'>
                            {
                                source
                                    ? <div className='full-width flex-row space-between'>
                                        <EditInline
                                            value={ source.name }
                                            onChange={ () => {}}
                                        />
                                        <div>
                                            <ActionButtons
                                                onSave={ this.saveResource }
                                                onDelete={ this.showDeleteResourceModal }
                                                onCancel={ this.showCancelResourceModal }
                                            />
                                        </div>
                                    </div>
                                    : <div>Get Started</div>
                            }
                        </div>
                        <div className='divider horizontal' />
                        {
                            source
                                ? <div className='auto-scroll-y' style={{ position: 'relative', height: 'calc(100vh - 3rem)' }}>
                                    <Accordion isOpenDefault title={'Details'}>
                                        <div className='padded'>
                                            <div>size: <strong>{ source.code }</strong></div>
                                            <div>type: { source && source.status && this.renderStatus(source.status.health) }</div>
                                            <div>dimension: 1280 x 720</div>
                                            <div>duration: 00:12</div>
                                        </div>
                                    </Accordion>
                                    <div className='divider horizontal' />
                                    <Accordion isOpenDefault title={'Preview'}>
                                    </Accordion>
                                </div>
                                : <div className='padded flex-row' style={{ position: 'relative', height: 'calc(100vh - 7rem)' }}>
                                    <div id={'guide'}>
                                        <div className='section'>1. Add a Source</div>
                                        <p>
                                            To show your information on display devices, start with creating a Virtual Source.
                                        </p>
                                        <img
                                            src={ helpCreate }
                                            className='help-gif'
                                        />
                                        <div className='section-end' />
                                        <div className='section'>2. Link to Device</div>
                                        <p>
                                            After you've created a virtual source, time to link it up to a real one.
                                            <br />
                                            Go on the desired device, visit <a href={ window.location.toString() }>Vision Viz Client Site</a>.
                                            <br />
                                            There you can enter the code of your Virtual Source, to complete the handshake.
                                        </p>
                                        <div className='section-end' />
                                        <img
                                            src={ helpClient }
                                            className='help-gif'
                                        />
                                        <div className='section'>3. Play Content on a Source</div>
                                        <p>
                                            You can either assign a Slideshow to a source, which will be repeated indefinitely.
                                            <br />
                                            Or you can create a Schedule, with multiple Slideshows at different timeslots, and assign that to the Source.
                                            <br />
                                            The choice is yours!
                                        </p>
                                        <img
                                            src={ helpCreate }
                                            className='help-gif'
                                        />
                                        <div className='section-end' />
                                    </div>
                                    <DocIndex headerQuery={'#guide>.section'} footerQuery={'#guide>.section-end'}/>
                                </div>

                        }
                    </div>
                }
            />
            {/* SAVE */}
            <ConfirmModal
                isOpen={ isSaveResourceModalOpen }
                type='success'
                title={'Save Source'}
                submitText='Save Source'
                cancelText='Cancel'
                onSubmit={ () => console.log('saving schedule') }
                onCancel={ this.hideSaveResourceModal }
            >
                <div>Saving will override the existing Source.</div>
                <br />
                <div>Are you sure?</div>
            </ConfirmModal>
            {/* CANCEL */}
            <ConfirmModal
                isOpen={ isCancelResourceModalOpen }
                type='warning'
                title={ 'Close Source'}
                submitText='Continue'
                cancelText='Cancel'
                onSubmit={ this.cancelResource }
                onCancel={ this.hideCancelResourceModal }
            >
                <div>Leaving now will discard all unsaved changes!</div>
                <br />
                <div>Are you sure you want to leave the Source?</div>
            </ConfirmModal>
            {/* DELETE */}
            <ConfirmModal
                isOpen={ isDeleteResourceModalOpen }
                type='error'
                title={ 'Delete Source'}
                submitText='Delete'
                cancelText='Cancel'
                requiredText={ source && source.name }
                onSubmit={ () => console.log('deleting source') }
                onCancel={ this.hideDeleteResourceModal }
            >
                <div>Deleting this Source cannot be undone!</div>
                <br />
                <div>Are you sure?</div>
            </ConfirmModal>
            {/* CREATE */}
            <ConfirmModal
                isOpen={ isAddModalOpen }
                type='primary'
                title={ 'Add a new Source' }
                onCancel={ this.hideAddModal }
                onSubmit={ this.addResource }
                submitText='Add Source'
                cancelText='Cancel'
            >
                <div className='flex-column'>
                    <input
                        onChange={ this.onChangeName }
                        className='full-width-padded'
                        placeholder={ 'Source\'s name...' }
                    />
                    <br />
                    <br />
                    <WidgetUpload
                    />
                    <br />
                    <label>
                        <input
                            type='checkbox'
                            checked={ isAddingCollection }
                            onChange={ this.toggleAddToCollection } />
                        <span>
                            Add to a <strong>&nbsp;<FAIcon name='folder' />&nbsp;&nbsp;Collection</strong>
                        </span>
                    </label>
                    {
                        isAddingCollection && <div style={{ marginTop: '1rem' }}>
                            <input
                                type='text'
                                onChange={ this.setNewCollectionName }
                                className='full-width-padded'
                                placeholder={ 'Collection\'s name...' }
                            />
                            <br />
                            <br />
                            OR select a collection:
                            <br />
                            <br />
                            {
                                isAddingCollection && <div>
                                    {
                                        sourcesCollections.map((collection, i) => (
                                            <label key={ i }
                                                className={'sidebar-collection'}
                                                style={{ color: `${addToCollectionId === collection.id ? '#00adee' : 'initial'}` }}
                                                onClick={ this.collectionToAdd(i, collection) }
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
            </ConfirmModal>
        </div>
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Sources)

import React, { Component, createRef } from 'react'
import FAIcon from 'react-fontawesome'
import { DocIndex, Layout, SearchResource, Tabs } from 'components'
import options from './config'
import tiles from 'widgets/tiles'
import appPhases from './phases'
import { ConfirmModal } from 'components/modal'
import helpBrowse from 'img/help/store_browse.gif'
import helpAddTile from 'img/help/store_add_tile.gif'
import firebase from 'util/firebase'

export class Store extends Component {
    constructor (props) {
        super(props)
        this.search
        this.explorer = createRef()
    }

    state = {
        tiles: [],
        tilesCollections: [],
        filteredTiles: tiles,
        isAddModalOpen: false
    }

    componentDidMount () {
        this.search.focus()
        console.log(this.search)
    }

    showAddModal = () => this.setState({ isAddModalOpen: true })
    hideAddModal = () => this.setState({ isAddModalOpen: false })
    onChangeName = e => {
        this.setState({
            title: e.target.value
        })
    }

    addResource = () => {
        const { activeTile } = this.state
        console.log('Add tile ', activeTile)
    }

    goToTile = (i) => () => {
        const { filteredTiles } = this.state
        const activeTile = filteredTiles[i]
        console.log('goToTile: ', i)
        if (activeTile.type !== 'category') {
            this.setState({
                activeTile,
                activeTileIndex: i
            }, () => console.log(this.state.activeTile))
        }
    }

    filterTiles = query => {
        const filteredTiles = tiles.filter(tile => {
            const isMatchingNames = tile?.name.toLowerCase().includes(query.toLowerCase())
            const isMatchingTags = (tile?.meta.tags || []).reduce((total, currentValue, currentIndex) => total = total || currentValue.toLowerCase().includes(query.toLowerCase()), false)
            return isMatchingNames || isMatchingTags
        })
        this.setState({ filteredTiles, query })
    }

    render () {
        const { isAddModalOpen, isAddingCollection, activeTile, activeTileIndex, filteredTiles } = this.state
        const editUI = <div>
            <div className='page-header padded'>
                <FAIcon className='icon' name={ options.icon } />
                <br />
                <div className='title'>{ options.name }</div>
            </div>
            <div className='divider horizontal'/>
            <div className='padded' style={{ padding: 'calc(0.5rem - 0.5px)', paddingLeft: '1rem' }}>
                <SearchResource
                    forwardRef={(ref) => this.search = ref }
                    onChange={ this.filterTiles }
                />
            </div>
            <div className='divider horizontal'/>
            <div className='auto-scroll-y' style={{ position: 'absolute', height: 'calc(100vh - 7rem)' }}>
                {
                    filteredTiles.map((tile, i) => (
                        <div key={ i }
                            onClick={ this.goToTile(i) }
                            style={{
                                position: 'relative',
                                height: tile?.type === 'category' ? '2rem' : '5rem',
                                width: tile?.type === 'category' ? 'calc(100% - 4px - 0.3rem)' : 'initial',
                                cursor: 'pointer',
                                // borderBottom: '1px solid lightgrey',
                                backgroundColor: i === activeTileIndex
                                    ? 'white'
                                    : 'initial',
                                borderTopLeftRadius: '3rem',
                                borderBottomLeftRadius: '3rem',
                                // borderLeft: i === activeTileIndex
                                //     ? '4px solid #00adee'
                                //     : '4px solid transparent',
                                paddingLeft: tile?.type === 'category' ? '0.3rem' : 'initial'
                            }}
                            className={tile?.type !== 'category' ? 'card flex-row' : 'flex-row'}
                        >
                            <div style={{
                                backgroundColor: i === activeTileIndex
                                    ? 'rgba(#00adee, 0.3)'
                                    : 'initial'
                            }}
                            >
                                {
                                    tile?.meta?.iconUrl
                                        ? <img src={tile?.meta?.iconUrl} style={{ height: 'auto', width: '3rem', margin: '1rem' }} />
                                        : <FAIcon className='icon' name={tile?.icon} />
                                }
                            </div>
                            <div className='flex-col'>
                                <div style={{ marginLeft: '0.3rem', marginTop: '0.3rem', fontSize: '0.9rem' }}><strong>{ tile?.name }</strong></div>
                                <div style={{ fontSize: '0.7rem', marginLeft: '0.3rem', marginTop: '0.3rem' }}>{ tile?.meta?.description }</div>
                            </div>
                            {
                                !['release'].includes(tile?.version) && <span
                                    style={{ position: 'absolute', right: '0.3em', top: '-0.5rem', fontSize: '0.6em' }}
                                    className={`version-banner ${tile?.version}`}>
                                    {tile?.version}
                                </span>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        return <div className='page'>
            <Layout
                rightDiv={
                    <div>
                        <div className='page-header padded flex-row space-between'>
                            <div>
                                {
                                    activeTile
                                        ? <div className='flex-row'>
                                            <div style={{ marginRight: '0.5rem' }}>
                                                <img style={{ width: '2rem', height: '2rem' }} src={ activeTile.meta.iconUrl } />
                                            </div>
                                            <div>{ activeTile.name }</div>
                                        </div>
                                        : <div>Get Started</div>
                                }
                            </div>
                            {
                                activeTile && <div>
                                    <button className='primary hollow flex-row' style={{ borderRadius: '1rem' }} onClick={ this.showAddModal }>
                                        &nbsp;
                                        <div style={{ marginRight: '0.6em' }}>Add to Library</div>
                                        <div><FAIcon name='plus-circle' /></div>
                                        &nbsp;
                                    </button>
                                </div>
                            }
                        </div>
                        <div className='divider horizontal' />
                        {
                            activeTile
                                ? <div>
                                    <div style={{
                                        position: 'absolute',
                                        backgroundColor: activeTile.meta.banner,
                                        color: 'white',
                                        width: '100%',
                                        height: '8rem'
                                    }}>
                                        <div style={{ marginTop: '4rem' }} className='flex-row'>
                                            <div>
                                                <img
                                                    src={ activeTile.meta.iconUrl }
                                                    style={{
                                                        width: '8rem',
                                                        height: '8rem',
                                                        marginLeft: '2rem'
                                                    }}
                                                />
                                            </div>
                                            <div style={{ marginTop: '2rem', marginLeft: '2rem', fontWeight: 'bolder' }}>
                                                <div>{ activeTile.description}</div>
                                                <br />
                                                <div style={{ color: '#666' }} className='flex-row flex-wrap'>
                                                    {
                                                        (activeTile.meta.tags || []).map((tag, t) => (
                                                            <div key={ t }
                                                                onClick={ () => this.filterTiles(tag)}
                                                                style={{
                                                                    backgroundColor: activeTile.meta.banner,
                                                                    cursor: 'pointer',
                                                                    color: 'white',
                                                                    padding: '0.35em',
                                                                    height: '1.5rem',
                                                                    marginRight: '0.25rem',
                                                                    marginBottom: '0.25em',
                                                                    borderRadius: '1rem'

                                                                }}>
                                                                {tag}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <br />
                                                <pre style={{ color: activeTile.meta.banner }}><code>{ activeTile.type }</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div className='padded flex-row' style={{ position: 'absolute', height: 'calc(100vh - 6rem - 2px)' }}>
                                    <div id={'guide'}>
                                        <h4>1. Explore Tiles</h4>
                                        <p className='padded'>
                                            Browse the available grid tiles in the store.
                                            <br />
                                            You can type filter, and search by tags.
                                        </p>
                                        <img className='help-gif padded' src={ helpBrowse } />
                                        <div className='section-end' />
                                        <h4>2. Add Tile to Library</h4>
                                        <p className='padded'>
                                            Once you have found a suitable Tile, add it to your library.
                                            <br />
                                            While in your library, it is available to all Slideshows you make.
                                        </p>
                                        <img className='help-gif padded' src={ helpAddTile } />
                                        <div className='section-end' />
                                        <h4>3. Use Tile</h4>
                                        <p className='padded'>
                                            Time to get started using the Tile in your Slideshows!
                                            <br />
                                            Check out the Guide on the Tile's page in the Store
                                        </p>
                                        <div className='section-end' />
                                        <h4>Appendix</h4>
                                        <div className='card-1 padded'>
                                            <h4>App Phases</h4>
                                            <div className='flex-col'>
                                                {
                                                    appPhases.map((phase, i) => (
                                                        <div key={ i } style={{ marginBottom: '1rem' }} className='flex-row'>
                                                            <div className={`version-banner ${phase.version}`} style={{ margin: 0, paddingTop: '2px' }}>
                                                                {phase.version}
                                                            </div>
                                                            <div style={{ marginTop: '0.4rem', marginLeft: '1rem' }}>{phase.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div className='section-end' />
                                    </div>
                                    <DocIndex headerQuery={'#guide>h4'} footerQuery={'#guide>.section-end' } />
                                </div>
                        }
                    </div>
                }
                leftDiv={ editUI }
            />
            <ConfirmModal
                isOpen={ isAddModalOpen }
                type='primary'
                title={ 'Add Tile to Library' }
                onCancel={ this.hideAddModal }
                onSubmit={ this.addResource }
                submitText='Save'
                cancelText='Cancel'
            >
                <div className='flex-column'>
                    <p>
                        You are about to add the "{ activeTile && activeTile.name }" Tile to your library.
                        <br />
                        <br />
                        Are you sure?
                    </p>
                </div>
            </ConfirmModal>
        </div>
    }
}

export default Store

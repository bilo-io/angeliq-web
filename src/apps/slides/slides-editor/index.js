import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import {
    Accordion,
    ActionButtons,
    Code,
    ConfigField,
    EditInline,
    Tabs,
    Layout,
    LayoutPreview,
    Markdown,
    JsonInput
} from 'components'
import { ActionModal, ConfirmModal } from 'components/modal'

import { MasterGrid } from 'components/grid'
import data from 'demo/mock-data/1d'
import options from './config'
import tiles from 'widgets/tiles'
import templates from './templates'
import { toPng } from 'dom-to-image'
// import firebase from 'util/firebase'
import { getAppConfig } from 'widgets/util'

// import PDFDocument from 'pdfkit'
import jsPDF from 'jspdf'
import helpGrid1 from 'img/help/slides_grid.gif'
import SlidesService from './service'
const service = new SlidesService()

const defaultLayoutIndex = 0
const defaultLayout = templates[defaultLayoutIndex]

export class SlidesEditor extends Component {
    constructor (props) {
        super(props)
        // NOTE: refs used for scrollIntoView()
        this.bottomOf = {
            accordion: {
                // left panel => for every accordion, by key: Hash
            },
            slides: {
                // right panel => showing the actual slides: Object
            }
        }
        this.topOf = {
            accordion: {
                // left panel => for every accordion, by key: Hash
            },
            slides: {
                // right panel => showing the actual slides: Object
            }
        }
    }

    state = {
        config: {},
        isModalOpen: false,
        isConfigModalOpen: false,
        activeSlideIndex: 0,
        isSwitching: false,
        options: {
            ...options,
            props: options.props.map(field => ({ ...field, value: field.defaultValue }))
        },
        values: {},
        slides: [],
        slideImages: [],
        slideshow: {
            name: 'New Slideshow'
        },
        activeLayoutIndex: defaultLayoutIndex,
        activeTileIndex: parseInt(Math.random() * defaultLayout.tiles.length)
    }

    componentDidMount () {
        const id = window.location.pathname.split('/').pop()

        if (id === 'start') {
            const slides = [
                {
                    ...defaultLayout,
                    backgroundColor: '#ffffff',
                    name: 'NewSlides',
                    tiles: templates[0].tiles
                }
            ]
        } else {
            // firebase.get('slides/', snapshot => {
            //     console.log('GET slides/' + id, snapshot.val()[id])
            //     this.setState({
            //         slides: snapshot.val()[id].slides || [],
            //         slideshow: {
            //             ...this.state.slideshow,
            //             ...snapshot.val()[id]
            //         },
            //         activeSlide: this.state.slideshow.slides.pop(),
            //         activeSlideIndex: 0
            //     }, () => console.log(this.state))
            // })
        }
    }

    // #region MODALS
    showModal = (activeModal) => () => this.setState({ isModalOpen: true, activeModal })

    hideModal = () => this.setState({ isModalOpen: false, activeModal: undefined })

    showTileModal = () => this.setState({ isModalOpen: true })
    hideTileModal = () => this.setState({ isModalOpen: false })
    // #endregion
    onChange = (key) => e => {
        const { value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [key]: value
            }
        }, () => console.log(this.state.values))
    }

    updateSlideshow = (field) => e => {
        this.setState({
            slideshow: {
                ...this.state.slideshow,
                [field]: e.target.value
            }
        }, () => console.log(e.target.value))
    }

    setStateTile = (i, data, cb = () => {}) => {
        const { slides, activeSlide, activeSlideIndex } = this.state

        const slide = {
            ...activeSlide,
            tiles: [
                ...activeSlide.tiles.slice(0, i),
                { ...activeSlide.tiles[i], data },
                ...activeSlide.tiles.slice(i + 1)
            ]
        }
        this.setStateSlide(activeSlideIndex, slide, () => console.log(`setSlide(${activeSlideIndex}) => setTile(${i}): `, slides[i]))
    }

    scrollTo = (panel, position, isAccordion = true, slideIndex = -1) => {
        // TODO: make it work
        const positionRef = position === 'top'
            ? 'topOf'
            : 'bottomOf'
        setTimeout(() => {
            const element = isAccordion
                ? this[positionRef].accordion[panel]
                : slideIndex >= 0
                    ? this[positionRef][panel][slideIndex]
                    : this[positionRef][panel]

            // element?.scrollIntoView && element.scrollIntoView({ behaviour: 'smooth' })
        }, 300)
    }

    selectLayout = (layout, activeLayoutIndex) => () => {
        const { activeSlideIndex } = this.state
        const transitionDuration = 250
        // 1. Trigger Animation
        this.setState({ isSwitching: true, activeLayoutIndex })
        setTimeout(() => {
            const { slides } = this.state
            this.setState({
                layout: undefined,
                activeTileIndex: undefined,
                slides: [
                    ...slides.slice(0, activeSlideIndex),
                    { ...slides[activeSlideIndex], tiles: [] },
                    ...slides.slice(activeSlideIndex + 1)
                ]
            }, () => {
                setTimeout(() => {
                    const { slides } = this.state
                    this.setState({
                        layout,
                        isSwitching: false,
                        slides: [
                            ...slides.slice(0, activeSlideIndex),
                            { tiles: layout.tiles }, // .map(layout => ({ layout })),
                            ...slides.slice(activeSlideIndex + 1)
                        ]
                    })
                }, transitionDuration)
            })
        }, transitionDuration)
    }

    captureSlide = (i) => {
        const delay = 150
        setTimeout(() => {
            const containerId = `vision-viz-slide-${i}`
            const node = document.getElementById(containerId)
            // console.log('exportTo.png', fileName, node)
            console.log('captureSlide ', i)

            toPng(node)
                .then((dataUrl) => {
                    const { slideImages } = this.state
                    this.setState({
                        slideImages: [
                            ...slideImages.slice(0, i),
                            dataUrl,
                            ...slideImages.slice(i + 1)
                        ]
                    })
                })
                .catch(error => {
                    console.log('error', error)
                })
        }, delay)
    }

    exportSlidesTo = (format) => () => {
        const { slideImages } = this.state
        const fileName = 'SomeOtherTest'
        switch (format) {
        case 'pdf':
            // LIB: 'jspdf'
            // const pdf = new jsPDF('p', 'mm', 'a4')
            // slideImages.forEach((image, i) => {
            //     pdf.addImage(image, 'PNG', 0, 0, 211, 298)
            // })
            // pdf.save('TestPDF.pdf')

            // LIB: 'pdfkit'
            // const doc = new PDFDocument()
            // doc.font('fonts/PalatinoBold.ttf')
            //     .fontSize(25)
            // slideImages.forEach((image, i) => {
            //     // pdf.addImage(image, 'PNG', 0, 0, 211, 298)
            //     doc.addPage()
            //         .image(image, 0, 0, 211,298)
            // })
            // doc.write(`${fileName}.pdf`)
            break
        default: alert('Unsupported export format: ', format)
        }
    }

    // #region SLIDES
    saveSlides = () => {
        const { slides, slideshow } = this.state
        const id = window.location.pathname.split('/').pop()
        console.log('SAVE slides', id, `'${slideshow.name}'`)
        if (id === 'start') {
            // new
        } else {
            // firebase.REF('slides/' + id)
            //     .update({
            //         name: slideshow.name,
            //         updatedAt: new Date().toISOString(),
            //         slides
            //     })
        }
        // console.log()
    }

    setStateSlide = (i, slide, cb = () => {}) => {
        this.setState({
            slides: [
                ...this.state.slides.slice(0, i),
                slide,
                ...this.state.slides.slice(i + 1)
            ]
        }, cb)
    }

    addSlide = () => {
        const { slides, activeSlideIndex } = this.state
        const randomIndex = 0 // getRandomIndex(templates.length)
        const newSlide = {
            title: `Slide ${slides.length + 1}`,
            color: '#333333',
            backgroundColor: 'transparent',
            displayDuration: 10,
            tiles: []
        }
        this.setState({
            activeSlideIndex: slides.length,
            activeSlide: newSlide,
            slides: [
                ...slides,
                newSlide
            ]
        }, () => {
            this.captureSlide(this.state.slides.length - 1)
            this.scrollTo('slides', 'bottom')
            this.scrollTo('slides', 'bottom', false)
        })
    }

    goToSlide = (i, cb = () => {}) => () => {
        this.setState({
            activeSlideIndex: i,
            activeSlide: this.state.slides[i]
        })
        this.scrollTo('slides', 'bottom', false, i)
        this.scrollTo('slides', 'top', false, i)
    }

    setSlide = field => e => {
        const { activeSlide, activeSlideIndex } = this.state
        console.log('setSlide', activeSlideIndex, field, e.target.value)

        this.setStateSlide(activeSlideIndex, {
            ...activeSlide,
            [field]: e.target.value
        }, () => console.log('setSlide', field, this.state))
    }

    deleteSlide = i => () => {
        const { slides } = this.state
        this.setState({
            slides: [
                ...slides.slice(0, i),
                ...slides.slice(i + 1)
            ]
        })
    }
    // #endregion

    // #region GRID
    updateLayout = i => (layout) => {
        const { slides } = this.state
        const slide = slides[i]
        this.captureSlide(i)
        this.setStateSlide(i, {
            ...slide,
            tiles: slide.tiles.map((tile, tileIndex) => {
                const keys = layout && layout[i] && typeof layout[i] === 'object' && Object.keys(layout[i])
                if (keys) {
                    const nonEmptyFields = {}
                    keys.filter(key => layout[i][key] !== undefined).forEach(key => { nonEmptyFields[key] = layout[i][key] })
                    const updatedTile = { ...tile, layout: nonEmptyFields }
                    console.log({ updatedTile })
                    return updatedTile
                } else {
                    return tile
                }
            })
        })
    }
    // #endregion

    // #region TILES
    addNewTile = (layout, type) => {
        const { activeSlide, activeSlideIndex } = this.state
        const slideWithNewTile = {
            ...activeSlide,
            tiles: [
                ...activeSlide.tiles,
                { layout, type }
            ]
        }
        this.setStateSlide(
            activeSlideIndex,
            slideWithNewTile,
            () => {
                console.log({ slideWithNewTile }, this.state)
                // this.setState({ activeSlideIndex: -1 })
            }
        )
    }

    addTile = (layout) => {
        // NOTE: add timeout, to allow activeSlideIndex to be set in render of slides.map
        const { activeSlide, activeSlideIndex, newTileType } = this.state
        // console.log('adding tile', layout, newTileType)
        setTimeout(() => {
            const slide = {
                ...activeSlide,
                tiles: [
                    ...((activeSlide && activeSlide.tiles) || []),
                    {
                        type: newTileType || 'grid:empty',
                        layout: layout || { x: 0, y: 0, w: 16, h: 12 }
                    }
                ]
            }

            this.setStateSlide(activeSlideIndex, slide, () => this.captureSlide(activeSlideIndex))
        }, 100)
    }

    editTile = (i, type) => {
        const { activeTileIndex, activeTileType, activeSlideIndex, slides } = this.state
        const activeSlide = slides[activeSlideIndex]
        const activeTile = activeSlide[activeTileIndex]

        this.setState({
            slides: [
                ...slides.slice(0, activeSlideIndex),
                {
                    ...activeSlide,
                    tiles: [
                        ...activeSlide.tiles.slice(0, activeTileIndex),
                        { ...activeTile, type: activeTileType },
                        ...activeSlide.tiles.slice(activeTileIndex + 1)
                    ]
                },
                ...slides.slice(activeSlideIndex + 1)
            ]
        }, () => {
            // console.log(slides[activeSlideIndex][i])
        })
    }

    clearTile = (i) => {
        const { slides, activeSlideIndex } = this.state
        const activeSlide = slides[activeSlideIndex]
        const activeTile = slides && activeSlide && activeSlide.length > 0 && activeSlide[i]
        // debugger
        this.setState({
            activeTileType: undefined,
            activeTileIndex: undefined,
            isModalOpen: false
        }, () => this.setStateTile(i, { layout: activeTile.layout }, () => console.log('clearTile:')))
    }

    deleteTile = (i) => {
        const { activeSlide, activeSlideIndex } = this.state
        this.setStateSlide(activeSlideIndex, {
            ...activeSlide,
            tiles: [
                ...activeSlide.tiles.slice(0, i),
                ...activeSlide.tiles.slice(i + 1)
            ]
        })
    }

    selectTile = (index) => () => {
        const { slides, activeSlideIndex } = this.state
        const activeTile = slides[activeSlideIndex] && slides[activeSlideIndex].length > 0 && slides[activeSlideIndex][index]
        this.setState({
            activeTile,
            activeTileIndex: index
        })
        this.scrollTo('tile', 'bottom')
    }

    updateTile = (i, data) => {
        this.setStateTile(i, data)
    }

    setTileType = (activeTileType) => () => {
        // console.log({ activeTileType })
        this.setState({
            activeTileType,
            isModalOpen: false
        }, this.saveTileConfig)
    }

    setNewTileType = (newTileType) => () => {
        console.log(newTileType)
        this.setState({
            newTileType
        })
    }

    openModalWithTile = (i) => {
        this.showTileModal()
        this.setState({
            activeTileIndex: i
        })
    }

    showConfigModal = () => this.setState({ isConfigModalOpen: true })
    hideConfigModal = () => this.setState({ isConfigModalOpen: false })

    editTile = (tile) => {
        console.log('editing tile', tile)
        this.setState({
            config: {
                tile,
                data: tile.data
            }
        })
        this.showConfigModal()
    }

    saveTileConfig = () => {
        const { activeTileIndex, activeTileType, activeSlideIndex, slides } = this.state
        const activeSlide = slides[activeSlideIndex]
        const activeTile = activeSlide[activeTileIndex]

        this.setState({
            // activeTileType: undefined,
            isModalOpen: false,
            slides: [
                ...slides.slice(0, activeSlideIndex),
                {
                    ...activeSlide,
                    tiles: [
                        ...activeSlide.tiles.slice(0, activeTileIndex),
                        { ...activeTile, type: activeTileType },
                        ...activeSlide.tiles.slice(activeTileIndex + 1)
                    ]
                },
                ...slides.slice(activeSlideIndex + 1)
            ]
        }, () => this.captureSlide(activeSlideIndex))
    }

    getTileConfig = (type) => {
        const TileConfig = MasterGrid.options.filter(tileOptions => tileOptions.type === type).pop()
        return TileConfig
    }

    onDrop = elemParams => {
        this.addNewTile({ ...elemParams, w: 12, h: 6 }, this.state.newTileType)
    }

    // #endregion
    renderSlides = () => {
        const {
            slides,
            isSwitching,
            activeTileIndex,
            activeSlideIndex,
            activeLayoutIndex
        } = this.state

        const slideHeight = 850
        return <div>
            <div ref={(el) => { this.topOf.slides.container = el }} />
            {
                slides.map((slide, i) => (
                    <div key={i}
                        onClick={ () => this.setState({
                            activeSlideIndex: i,
                            activeSlide: slides[i]
                        })}
                        className={ activeSlideIndex === i ? `fade-default fade-${isSwitching ? 'out' : 'in'}` : '' }
                        style={{
                            marginBottom: '3rem',
                            height: `${slideHeight || 850}px`,
                            overflow: 'hidden'
                        }}>
                        <div ref={(el) => { this.topOf.slides[i] = el }} />
                        <Accordion
                            title={ slide.title }isOpenDefault={ false }
                            onAdd={ this.addTile }
                            onClose={ this.deleteSlide(i) }>
                            <Tabs
                                className='padded'
                                defaultTab='details'
                                keys={['details', 'layout', 'templates', 'config']}
                                templates={
                                    <div>Coming soon...</div>
                                }
                                details={
                                    <div className='flex-row space-between'>
                                        <div>
                                            <div>Title</div>
                                            <input
                                                value={ slide.title }
                                                type='text'
                                                onChange={ this.setSlide('title') }
                                            />
                                        </div>
                                        {/* COLOR PICKERS: https://casesandberg.github.io/react-color/ */}
                                        <div>
                                            <div>Background Color</div>
                                            <input
                                                value={ slide.backgroundColor }
                                                defaultValue={ slide.backgroundColor }
                                                type='color'
                                                onChange={ this.setSlide('backgroundColor') }
                                            />
                                        </div>
                                        <div>
                                            <div>Text Color</div>
                                            <input
                                                value={ slide.color }
                                                defaultValue={ slide.color }
                                                type='color'
                                                onChange={ this.setSlide('color') }
                                            />
                                        </div>
                                        <div>Slide display duration</div>
                                        <input type='number' value={ slide.displayDuration } onChange={ this.setSlide('displayDuration')} />
                                    </div>
                                }
                                layout={
                                    <div className='flex-row flex-wrap'>
                                        {
                                            templates.map((template, i) => <div key={ i }
                                                className={'card'}
                                                style={{ cursor: 'pointer', width: '202px', height: '125px', border: '2px solid #00adee', borderColor: activeLayoutIndex === i ? '#00adee' : 'transparent' }}
                                                onClick={ this.selectLayout(template, i) }>
                                                <LayoutPreview
                                                    fill='#eeeeef'
                                                    template={ template }
                                                    width={ 200 }
                                                    height={ 120 }
                                                />
                                            </div>)
                                        }
                                    </div>
                                }
                                config={
                                    <div>
                                        <p>
                                            Configure the properties of your grid, including column count, row height, compacting behaviour (e.g. vertical, horizontal or none), etc.
                                        </p>
                                        {
                                            options.props.map((prop, i) => <div key={ i }>
                                                <ConfigField
                                                    onChange={ this.onChange }
                                                    type={ prop.type }
                                                    label={ prop.name }
                                                    name={ prop.name }
                                                    defaultValue={ prop.defaultValue }
                                                    props={ prop.children }
                                                    isExpanded={ true }
                                                />
                                            </div>)
                                        }
                                    </div>
                                }
                            />
                        </Accordion>
                        <div id={ `vision-viz-slide-${i}`}
                            style={{
                                background: slide.backgroundColor,
                                minHeight: `${slideHeight || 850}px`,
                                color: slide.color
                            }}>
                            <MasterGrid
                                isExportable
                                items={slide.tiles}
                                data={data}
                                options={{
                                    height: slideHeight
                                }}
                                onDropItem={this.onDrop}
                                onAddItem={this.addTile}
                                onEditItem={this.editTile }
                                onClickItem={this.selectTile}
                                onClearItem={this.clearTile}
                                onDeleteItem={this.deleteTile}
                                onChangeItem={this.updateTile}
                                onChangeLayout={ this.updateLayout(i) }
                                activeTileIndex={activeSlideIndex === i ? activeTileIndex : undefined}
                            />
                        </div>
                        <SlideDivider length={ slides.length } index={ i } />
                        <div ref={(el) => { this.bottomOf.slides[i] = el }} />
                    </div>
                ))
            }
            <div ref={(el) => { this.bottomOf.slides.container = el }} />
        </div>
    }

    render () {
        const {
            config,
            jsonString,
            jsonObject,
            slides,
            slideshow,
            slideImages,
            activeSlideIndex,
            activeModal,
            activeTile,
            activeTileType,
            isModalOpen,
            isConfigModalOpen
        } = this.state
        const DEBUG = true

        const shareButtonClassName = 'primary hollow round'
        const shareButtonStyle = { paddingLeft: '0.35rem', paddingRight: '0.65rem', border: 'none' }

        return <div className='page'>
            <Layout
                rightDiv={
                    <div>
                        <div className='page-header padded'>
                            {
                                slideshow && slides.length > 0
                                    ? <div className='full-width flex-row space-between'>
                                        <EditInline
                                            value={ slideshow.name }
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
                            slideshow && slides.length > 0
                                ? this.renderSlides()
                                : <div className='padded'>
                                    <div id={'guide'}>
                                        <h4>1. Add a Slide & Tiles</h4>
                                        <img
                                            src={ helpGrid1 }
                                            className='help-gif padded'
                                        />
                                        <h4>2. Configure Tile</h4>
                                        <h4>3. Configure Slide</h4>
                                        <h4>4. Save Slideshow</h4>
                                    </div>
                                </div>
                        }
                        <div ref={(el) => { this.slidesEnd = el }} />
                    </div>
                }
                leftDiv={
                    <div>
                        <div className='page-header space-between padded'>
                            <div className='flex-row'>
                                <FAIcon className='icon' name={ options.icon } />
                                <br />
                                <div className='title'>{ options.name }</div>
                            </div>
                            <div>
                                <button
                                    className='primary hollow action-button'
                                    onClick={ this.addSlide }>
                                    <div className='icon'>
                                        <FAIcon name='plus-circle' />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='divider horizontal' />
                        <Tabs
                            defaultTab='apps'
                            keys={['apps', 'slides', 'share']}
                            slides={
                                <div className='padded'>
                                    <div style={{ position: 'relative', height: 'calc(100%)', overflow: 'hidden', overflowY: 'auto' }}>
                                        <br />
                                        {
                                            slides.map((slide, i) => <div
                                                key={ i }
                                                className='card thumbnail-preview'
                                                style={{
                                                    backgroundColor: slide.backgroundColor,
                                                    border: `2px solid ${i === activeSlideIndex ? '#00adee' : 'transparent'}`,
                                                    color: i === activeSlideIndex ? '#00adee' : '#aaa',
                                                    marginBottom: '0.5rem'
                                                }}
                                                onClick={ this.goToSlide(i, () => DEBUG && console.log('goToSlide [ ' + i + ' ] from SlidesPanel')) }
                                            >
                                                <img style={{
                                                    width: '12rem',
                                                    height: 'auto',
                                                    overflow: 'hidden'
                                                }} src={ slideImages[i] } />
                                            </div>)
                                        }
                                    </div>
                                    <br />
                                    <div ref={(el) => { this.bottomOf.accordion.slides = el }} />
                                </div>
                            }
                            share={
                                <div className='flex-row' style={{ padding: 'calc(0.5rem - 1.5px)' }}>
                                    {
                                        [
                                            { name: 'Preview', type: 'preview', icon: 'play' },
                                            { name: 'PDF Export', type: 'pdf', icon: 'file-pdf' },
                                            { name: 'Online Link', type: 'online', icon: 'globe' }
                                        ].map((exportFormat, i) => <div key={ i }>
                                            <button
                                                className={ shareButtonClassName }
                                                style={ shareButtonStyle }
                                                onClick={ this.exportSlidesTo(exportFormat.type) }>
                                                <div>&nbsp;&nbsp;<FAIcon name={exportFormat.icon}/></div>
                                            </button>
                                        </div>)
                                    }
                                </div>
                            }
                            apps={
                                <div className='flex-col auto-scroll-y' style={{ height: 'calc(100vh - 7rem)' }}>
                                    {
                                        tiles.map((tile, i) => (
                                            tile.type === 'category'
                                                ? <div className='card padded'>
                                                    { tile.name }
                                                    {/* <div className='divider horizontal' /> */}
                                                </div>
                                                : <div key={ `${i}-${tile.id}-${tile.type}` }
                                                    style={{ width: '100%', height: tile && tile.meta && tile.meta.iconUrl ? '3rem' : '2rem', background: tile.meta.banner, color: 'white', marginBottom: '0.5rem', cursor: 'pointer' }}
                                                    draggable={ true }
                                                    className='card flex-row'
                                                    unselectable='on'
                                                    // onMouseDown={ this.setTileType(tile.type) }
                                                    onDragStart={ e => {
                                                        e.dataTransfer.setData('text/plain', '')
                                                        this.setNewTileType(tile.type)()
                                                    }}
                                                >
                                                    { tile && tile.meta && tile.meta.iconUrl && <img src={ tile.meta.iconUrl } style={{ width: '3rem', height: '3rem' }} /> }
                                                    <div style={{ height: '3rem', lineHeight: '3rem' }}>{ tile.name }</div>
                                                </div>
                                        ))
                                    }
                                </div>
                            }
                        />
                        {/*
                            // activeTile && activeTile.type && <Accordion isOpenDefault title={ <div><strong>Config</strong></div> }>
                            //     <div ref={(el) => { this.topOf.accordion['tile'] = el }} />
                            //     {
                            //         (this.getTileConfig(activeTile.type) || { props: []}).props.map((prop, i) => <div key={ i }>
                            //             <ConfigField
                            //                 onChange={ this.onChange }
                            //                 type={ prop.type }
                            //                 label={ prop.name }
                            //                 name={ prop.name }
                            //                 defaultValue={ prop.defaultValue }
                            //             />
                            //         </div>)
                            //     }
                            //     <div ref={(el) => { this.bottomOf.accordion['tile'] = el }} />
                            // </Accordion>
                        */}
                    </div>
                }
            />
            <ConfirmModal
                isOpen={ isConfigModalOpen }
                type='primary'
                submitText='Update'
                cancelText='Cancel'
                onSubmit={ this.saveAppConfig }
                onCancel={ this.hideConfigModal }
            >
                { config.tile && config.tile.type }
                {
                    config && config.tile && (getAppConfig(config.tile.type) || { props: [] }).props.map((prop, i) => <div key={ i }>
                        <ConfigField
                            onChange={ this.onChange }
                            type={ prop.type }
                            label={ prop.name }
                            name={ prop.name }
                            defaultValue={ prop.defaultValue }
                        />
                    </div>)
                }
            </ConfirmModal>

            <ActionModal
                isOpen={ isModalOpen }
                activeModal={ activeModal }
                resourceName='Slide'
                onCancel={ this.hideModal }
                onAction={{
                    save: this.saveSlides,
                    remove: this.deleteResource,
                    create: this.addResource
                }}
                views={{
                    save: <div>
                        <div>Saving will override the existing Slideshow.</div>
                        <br />
                        <div>Are you sure?</div>
                    </div>,
                    close: <div>
                        <div>Leaving now will discard all unsaved changes!</div>
                        <br />
                        <div>Are you sure you want to leave the Slideshow?</div>
                    </div>,
                    remove: <div>
                        <div>Deleting this Slideshow cannot be undone!</div>
                        <br />
                        <div>Are you sure?</div>
                    </div>
                }}
            />
        </div>
    }
}

const SlideDivider = ({ length, index }) => <div className='slide-divider'>
    <div className='line'><hr /></div>
    <div className='text'>{ index + 1 + '  /  ' + length }</div>
    <div className='line'><hr /></div>
</div>
export default SlidesEditor

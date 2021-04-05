// #region Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
// #endregion Modules

// #region Components
import WidgetMediaAudio from './audio'
import WidgetMediaImage from './image'
import WidgetMediaText from './text'
import WidgetMediaVideo from './video'
// #endregion

// #region Assets & Data
// #endregion

export class WidgetMediaMaster extends Component {
    constructor (props) {
        super(props)
        this.id = `vision-master-media_${(new Date().toISOString())}`
    }

    static propTypes = {
        data: PropTypes.shape({
            url: PropTypes.string
        }),
        type: PropTypes.oneOf([
            'image',
            'text',
            'audio',
            'video'
        ])
    }

    renderMedia = () => {
        const { type, data, options } = this.props
        const props = {
            data,
            options
        }

        switch (type) {
        case 'widget:media:audio':
            return <WidgetMediaAudio { ...props } />
        case 'widget:media:image':
            return <WidgetMediaImage { ...props } />
        case 'widget:media:text':
            return <WidgetMediaText { ...props } />
        case 'widget:media:video':
            return <WidgetMediaVideo { ...props } />
        default:
            return <MediaNotSupported type={type} />
        }
    }

    render () {
        return ( // TODO: make id uniq
            <div>
                <div id={ this.id }>{this.renderMedia()}</div>
            </div>
        )
    }
}

const MediaNotSupported = ({ type }) => (
    <div className='' style={{
        padding: '0.5rem',
        paddingTop: '2.5rem',
        width: 'calc(100% - 2rem)'
    }}>
        <div style={{ color: 'orange' }}>
            <FAIcon name='exclamation-circle' />
            &nbsp;&nbsp;
            Warning
        </div>
        <div className='divider horizontal' />
        <p style={{ fontSize: '0.9rem' }}>
            Media of type &nbsp;&nbsp;<code><strong>{type}</strong></code>&nbsp;&nbsp; are not currently supported.
        </p>
    </div>
)

// see master chart/widget
// TODO: .types
// TODO .options

export default WidgetMediaMaster

import React, { Component } from 'react'
import { Input } from 'components'
import { videoData as sampleData } from './data'

export class WidgetMediaVideo extends Component {
    static defaultProps = {
        options: {
            width: 320,
            height: 240,
            autoplay: true
        },
        data: {
            src: sampleData[Math.floor(Math.random() * sampleData.length)],
            format: 'mp4'
        }
    }

    state = {
    }

    componentDidMount () {
        const { src, format } = this.props.data
        const { width, height, autoplay } = this.props.options

        this.setState({
            src,
            format,
            width,
            height,
            autoplay
        })
    }

    onChange = (field) => e => {
        this.setState({
            [field]: e.target.value
        })
    }

    render () {
        const { data, options, style, isEditable } = this.props

        const { src, format, width, height, autopolay } = this.state

        return <div className='flex-col'>
            {
                isEditable && <div className='flex-col'>
                    <div>source:</div>
                    <Input
                        label='Type something...'
                        type='text'
                        value={ src }
                        onChange={ this.onChange('text') }
                    />
                    <br />
                    <div>width:</div>
                    <Input
                        label='Type something...'
                        type='number'
                        value={ width }
                        onChange={ this.onChange('width') }
                    />
                    <br />
                    <div>height:</div>
                    <Input
                        label='Type something...'
                        type='number'
                        value={ height }
                        onChange={ this.onChange('height') }
                    />
                </div>
            }
            <video
            // controls
                autoPlay
                loop
                width={ width }
                height={ height }
                style={{ ...style, backgroundColor: 'black' }}>
                <source src={ src } type={ `video/${format || 'mp4'}` } />
            Your browser does not support the video tag: '{format}'
            </video>
        </div>
    }
}

WidgetMediaVideo.formats = [
    {
        name: 'MP4',
        format: 'video/mp4'
    },
    {
        name: 'WebM',
        format: 'video/webm'
    },
    {
        name: 'Ogg',
        format: 'video/ogg'
    }
]

WidgetMediaVideo.options = {
    name: 'WidgetMediaVideo',
    type: 'widget:video',
    icon: 'video',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetMediaVideo

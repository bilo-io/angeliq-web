import React, { Component } from 'react'
import { Input } from 'components'

export class WidgetMediaAudio extends Component {
    static defaultProps = {
        options: {
            width: 320,
            height: 240
        },
        data: {
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            format: 'mpeg' // mp3
        }
    }

    render () {
        const { data, options, isEditable } = this.props
        const { width, height } = options
        const { src, format } = data

        // TODO: https://wavesurfer-js.org/
        return <div className='flex-col'>
            {
                isEditable && <Input
                    label='Type something...'
                    type='text'
                    value={ src }
                    onChange={this.onChange}
                />
            }
            <audio width={ width } height={ height } controls>
                <source src={ src } type={ `audio/${format || 'mpeg'}` } />
                Your browser does not support the audio tag: '{format}'
            </audio>
        </div>
    }
}

WidgetMediaAudio.formats = [
    {
        name: 'MP3',
        format: 'audio/mpeg'
    },
    {
        name: 'OGG',
        format: 'audio/ogg'
    },
    {
        name: 'WAV',
        format: 'audio/wav'
    }
]

WidgetMediaAudio.config = {
    name: 'WidgetMediaAudio',
    type: 'widget:audio',
    icon: 'music',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetMediaAudio

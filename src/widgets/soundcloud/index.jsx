import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, SoundCloud } from 'components'
import getTrackId from './utils'
import sampleData from './data'

export class WidgetSoundcloud extends Component {
    static propTypes = {
        data: PropTypes.shape({
            url: PropTypes.string.isRequired
        }),
        onDataChange: PropTypes.func,
        isAutoplay: PropTypes.bool,
        isLooping: PropTypes.bool,
        duration: PropTypes.number,
        sampleData: PropTypes.array
    }

    static defaultProps = {
        isAutoplay: true,
        isLooping: false,
        onDataChange: (data) => console.log('define WidgetYoutube.onDataChange()'),
        duration: 4,
        data: {
            url: sampleData[Math.floor(Math.random() * sampleData.length)],
            trackId: 55106914
        }
    }

    state = {
        url: '',
        trackId: undefined
    }

    componentDidMount () {
        const { duration, onNext, data } = this.props
        this.timeout = setTimeout(onNext, duration * 1000)

        this.getTrackId(data.url)
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.getTrackId(nextProps.url)
    }

    getTrackId = (url) => {
        getTrackId(url)
            .then(trackId => {
                console.log('SUCCESS => Soundcloud TrackID: ', trackId)
                this.setState({
                    url,
                    trackId
                })
            })
            .catch(error => {
                console.log(`ERROR => Soundcloud TrackID: ${error}`)
            })
    }

    componentWillUnmount () {
        clearTimeout(this.timeout)
    }

    render () {
        const { onChange, data, isEditable } = this.props
        const { url, trackId } = this.state

        return <div style={{
            width: '100%',
            overflow: 'hidden'
        }}>
            {
                isEditable && <Input
                    label='URL'
                    type='text'
                    value={url}
                    style={{
                        width: '100%'
                    }}
                    onChange={(e) => this.getTrackId(e.target.value)}
                />
            }
            <br />
            {
                url && <div className=''>
                    <SoundCloud url={ data.url } trackId={ trackId } />
                </div>
            }
        </div>
    }
}

WidgetSoundcloud.config = {
    name: 'Soundcloud',
    type: 'widget:soundcloud',
    icon: 'image',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetSoundcloud

import React, { Component } from 'react'
import { Iframe, Input } from 'components'

export class SoundCloud extends Component {
    static defaultProps = {
        autoPlay: false,
        hideRelated: false,
        showComments: true,
        showUser: true,
        height: 300
    }

    state = { isLoading: true }

    hideLoader = () => this.setState({ isLoading: false })

    componentWillReceiveProps = (nextProps, nextState) => {
        console.log(nextProps)
        if (nextProps.url !== this.props.url) {
            // this.processUrl(nextProps.url)
        }
    }

    render () {
        const {
            trackId,
            autoPlay,
            hideRelated,
            showComments,
            showUser,
            height
        } = this.props

        const { isLoading } = this.state

        return <div className='sound-cloud' style={{
            height: `${height}px`
        }}>
            <Iframe
                onLoad={ this.hideLoader }
                width="100%"
                height={ height }
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=${autoPlay}&hide_related=${hideRelated}&show_comments=${showComments}&show_user=${showUser}&show_reposts=false&show_teaser=true&visual=true`}
            />
        </div>
    }
}

export default SoundCloud

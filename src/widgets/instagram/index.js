import React, { Component } from 'react'
import { Card, Input } from 'components'
import PropTypes from 'prop-types'
import axios from 'axios'

import FAIcon from 'react-fontawesome'
import { debounce } from 'lodash'
import './style.scss'

export class WidgetInstagram extends Component {
    static propDocs = {
        data: 'The shape containing data required for the component. { hashtag: "whatever" }',
        duration: 'When the component should call onNext()',
        onNext: 'Called if this component should be hidden, for a new one to replace it',
        isEditabe: 'Allows editing of the data'
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        duration: PropTypes.number,
        onNext: PropTypes.func,
        onDataChange: PropTypes.func,
        isEditable: PropTypes.bool
    }

    static defaultProps = {
        onDataChange: (data) => console.log('<WidgetInstagram />.onDataChange() UNDEFINED'),
        isEditable: false,
        duration: 10,
        data: {
            hashtag: 'hdr'
        }
    }

    state = {
        posts: [],
        activePost: 0,
        query: ''
    }

    componentDidMount () {
        const { data } = this.props
        const { hashtag, handle } = data
        this.setState({
            query: hashtag || handle
        })
        this.fetchPosts({ hashtag, handle })
    }

    componentWillUnmount () {
        clearInterval(this.loopInterval)
    }

    componentWillReceiveProps (nextProps, nextState) {
        const { data } = this.props
        const { hashtag, handle } = data
        if (hashtag !== nextProps.data.hashtag || hashtag !== nextProps.data.hashtag) {
            const { hashtag, handle } = nextProps.data
            this.fetchPosts({ hashtag, handle })
        }
    }

    getPosts = (e) => {
        const query = e.target.value
        this.setState({
            query
        }, () => console.log(this.state))
        if (query.length > 0) {
            const data = { hashtag: query }
            this.fetchPosts(data)
            this.props.onDataChange(data)
        }
    }

    beginLoop = () => {
        const { duration, onNext } = this.props
        const { posts } = this.state
        this.loopInterval = setInterval(() => {
            const activePost = this.state.activePost + 1
            if (activePost >= posts.length && posts.length > 0) {
                onNext && onNext()
            }
            this.setState({
                activePost: activePost >= posts.length ? 0 : activePost
            })
        }, duration * 1000)
    }

    fetchPosts ({ hashtag, handle }) {
        console.log('fetching: ', { hashtag, handle })
        clearInterval(this.loopInterval)
        axios({
            method: 'GET',
            url: `https://www.instagram.com/explore/tags/${hashtag}/?__a=1`
        }).then(response => {
            if (response.status === 200) {
                const posts = response.data.graphql.hashtag.edge_hashtag_to_top_posts.edges
                console.log(posts)
                this.setState({
                    posts: posts.map(post => ({
                        src: post.node.display_url,
                        likes: post.node.edge_liked_by.count,
                        caption: post.node.edge_media_to_caption.edges[0].node.text
                    })),
                    isLooping: true
                }, this.beginLoop)
            }
        }).catch(error => {
            console.log('error', error)
        })
    }

    render () {
        const { isEditable } = this.props
        const { posts, query, activePost } = this.state
        const post = posts.length > 0 ? posts[activePost] : undefined
        return <div className='flex-col' style={{ position: 'relative', overflow: 'hidden' }}>
            {
                isEditable && <Input
                    label='#hashtag'
                    type='text'
                    value={query}
                    onChange={this.getPosts}
                />
            }
            <br />
            {
                post && <div key={`instagram-post-${query}`} className='instagram-post'>
                    <div className='details'>
                        <div><FAIcon name='heart' color='red' />&nbsp;&nbsp;&nbsp;{post.likes}</div>
                        <div>{post.caption}</div>
                    </div>
                    <img key={`instagram-${query}`} src={post.src} />
                </div>
            }
        </div>
    }
}

WidgetInstagram.config = {
    name: 'Instagram',
    type: 'widget:instagram',
    icon: 'image',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetInstagram

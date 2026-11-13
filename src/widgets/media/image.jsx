import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'
import randomMedia from 'util/random-media'

export class WidgetMediaImage extends Component {
    static propTypes = {
        data: PropTypes.object,
        duration: PropTypes.func,
        onDataChange: PropTypes.func
    }

    static defaultProps = {
        onDataChange: (data) => console.log('define WidgetMediaImage.onDataChange()'),
        data: {
            url: randomMedia('image')
        },
        duration: 3
    }

    state = {
        url: ''
    }

    componentDidMount () {
        const { duration, onNext, data } = this.props
        setTimeout(onNext, duration * 1000)
        this.setState({
            url: (data?.url) || randomMedia('image')
        })
    }

    onChange = (e) => {
        const url = e.target.value
        this.setState({
            url
        })
        this.props.onDataChange({ url })
    }

    render () {
        const { data, isEditable } = this.props
        const { url } = this.state
        return <div className='flex-col'>
            {
                isEditable && <Input
                    label='Type something...'
                    type='text'
                    value={ url }
                    onChange={this.onChange}
                />
            }
            <img src={ url } />
        </div>
    }
}

WidgetMediaImage.config = {
    name: 'ImageApp',
    type: 'widget:media:image',
    icon: 'image',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetMediaImage

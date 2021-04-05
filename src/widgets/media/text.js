import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'

export class WidgetMediaText extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        style: PropTypes.shape({
            color: PropTypes.string,
            fontWeight: PropTypes.string,
            fontSize: PropTypes.string
        }),
        data: PropTypes.shape({
            text: PropTypes.string
        })
    }

    static defaultProps = {
        style: {
            color: '#00adee',
            fontWeight: 'bold',
            fontSize: '1.5rem'
        },
        data: {
            text: 'WidgetMediaText: unspecified data={{ text }} style={{ color, background, ... }}'
        }
    }

    state = {

    }

    componentDidMount () {
        this.setState({
            text: this.props.data.text
        })
    }

    onChange = (field) => (e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    render () {
        const { data, style, isEditable } = this.props
        const { text, color } = this.state

        return <div className='flex-col'>
            {
                isEditable && <div className='flex-col'>
                    <Input
                        label='Type something...'
                        type='text'
                        value={ text }
                        onChange={ this.onChange('text') }
                    />
                    <Input
                        label='Color'
                        type='color'
                        value={ color }
                        onChange={ this.onChange('color') }
                    />
                </div>
            }<div style={{ ...style, color }}>{text}</div>
        </div>
    }
}

WidgetMediaText.options = {
    name: 'TextApp',
    type: 'widget:media:text',
    icon: 'font',
    props: [{
        name: 'text',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetMediaText

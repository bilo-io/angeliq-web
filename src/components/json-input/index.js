import React, { Component } from 'react'

export class JsonInput extends Component {
    constructor (props) {
        super(props)
        this.myRef = React.createRef()
    }

    state = {
        error: false
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            value: nextProps.value,
            error: false
        })
        try {
            const json = JSON.stringify(JSON.parse(nextProps.value), false, 2)
            this.setState({
                json
            })
        } catch (e) {
            this.setState({
                error: e
            }, () => {
                if (nextProps.DEBUG) console.log(this.state.error.stack)
            })
        }
    }

    onChange = () => {
        const value = this.myRef.current.value
        this.props.onChange({ target: { value } })
    }

    render () {
        const { onChange, value } = this.props
        const { json, error } = this.state
        return <div>
            {
                error && <div style={{ background: 'pink', color: 'red', borderRadius: '4px', padding: '1rem' }}>{ error.message }</div>
            }
            <pre><code>
                <textarea
                    ref={ this.myRef }
                    onChange={ this.onChange }
                    // onInput={ this.onChange }
                    onKeyUp={ this.onChange }
                    value={ value }
                    style={{
                        minHeight: '20rem',
                        width: '100%',
                        color: error ? 'red' : 'black'
                    }}
                >
                </textarea>
            </code></pre>
        </div>
    }
}

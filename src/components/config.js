import React, { Component } from 'react'

export class ConfigField extends Component {
    static defaultProps = {
        onChange: (name) => () => {}
    }

    state = {
        isExpanded: false
    }

    toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded })
    renderField () {
        const {
            type,
            value,
            name,
            onChange,
            defaultValue,
            props
        } = this.props
        const {
            isExpanded
        } = this.state
        const configProps = {
            value,
            defaultValue,
            checked: value,
            defaultChecked: defaultValue,
            onChange: onChange(name)
        }

        switch (type) {
        case 'palette':
            return <div className='flex-row'>
                { (value || defaultValue || []).map((color, i) => <div key={ i } style={{ width: '0.75rem', height: '0.75rem', backgroundColor: color, marginTop: '0.75rem', marginRight: '3px', marginBottom: '3px' }}></div>) }
            </div>
        case 'boolean':
            return <input className='full-width' type='checkbox' { ...configProps } style={{ height: '2rem' }}/>
        case 'number':
            return <input className='full-width' type='number' { ...configProps } style={{ maxWidth: '4em', textAlign: 'right', fontWeigth: 'bold', fontSize: '1rem' }}/>
        case 'text':
            return <input className='full-width' type='text' { ...configProps } />
        case 'color':
            return <input className='full-width' type='color' { ...configProps } style={{ maxWidth: '4em', textAlign: 'right', fontWeigth: 'bold', fontSize: '1rem' }}/>
        case 'select':
            return <div>
                { value }
            </div>
        case 'group':
            return <div onClick={ this.toggleExpanded }>
                {
                    isExpanded && (props || []).map((prop, i) => <div key={ i }>
                        {/* { JSON.stringify(prop, false, 4) } */}
                        <ConfigField
                            type={ prop.type }
                            label={ prop.name }
                            name={ prop.name }
                            defaultValue={ prop.defaultValue }
                        />
                        {/* <ConfigField
                                onChange={ onChange(name) }
                                type={ prop.type }
                                label={ prop.name }
                                name={ prop.name }
                                defaultValue={ prop.defaultValue }
                                value={ value }
                            /> */}
                    </div>)
                }
            </div>
        default:
            return <div>ERR: unhandled config: '{ type }'</div>
        }
    }

    render () {
        const {
            type,
            label,
            value,
            defaultValue,
            onChange
        } = this.props

        return <div className='padded flex-row space-between flex-wrap'>
            <div style={{ fontsize: '1rem', marginTop: '0.5rem' }}>{ label && <strong>{ label }</strong> }</div>
            <div className='full-width'>{ this.renderField() }</div>
            <br />
        </div>
    }
}

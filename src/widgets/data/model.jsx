import React, { Component } from 'react'

export class WidgetDataModel extends Component {
    static defaultProps = {
        options: {
            width: 320,
            height: 240
        },
        data: {
            key: 'modelKey',
            model: (data) => data
        }
    }

    render () {
        const { data, options, onChange } = this.props
        const { width, height } = options
        const { keys } = data

        return <div>
            <div>DataModel</div>
            { keys.map((key, i) => <div><label>{key}<input type='checkbox' /></label></div>)}
        </div>
    }
}

WidgetDataModel.options = {
    name: 'DataModel',
    type: 'widget:data:model',
    icon: 'cube',
    props: [{
    }]
}

export default WidgetDataModel

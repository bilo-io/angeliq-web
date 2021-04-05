import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'components'
import Map from 'components/map'

export class WidgetMap extends Component {
    static propTypes = {
        // data: PropTypes.object.isRequired,
        isEditable: PropTypes.bool,
        duration: PropTypes.number,
        onNext: PropTypes.func
    }

    render () {
        const { data } = this.props
        const { points } = data || { points: [] }
        return <div>
            <h1>WidgetMap</h1>
            <Card className='map-view'>
                <Map layerStyle={'light'} points={points || []} />
            </Card>
        </div>
    }
}

WidgetMap.config = {
    name: 'Map',
    type: 'widget:map',
    icon: 'image',
    props: [{
        name: 'url',
        type: 'text',
        defaultValue: ''
    }]
}

export default WidgetMap

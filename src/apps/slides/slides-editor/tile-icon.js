import React from 'react'
import FAIcon from 'react-fontawesome'

export const TileIcon = ({ type }) => {
    switch (type) {
    // CHARTS
    case 'chart:bar':
        return <FAIcon name='chart-bar' />
    case 'chart:pie':
        return <FAIcon name='chart-pie' />
    case 'chart:line':
        return <FAIcon name='chart-line' />
    case 'chart:table':
        return <FAIcon name='table' />
        // WIDGETS
    case 'widget:audio':
        return <FAIcon name='music' />
    case 'widget:media:image':
        return <FAIcon name='image' />
    case 'widget:media:text':
        return <FAIcon name='font' />
    case 'widget:video':
        return <FAIcon name='video' />
    case 'widget:upload':
        return <FAIcon name='upload' />
    case 'widget:filter':
        return <FAIcon name='filter' />
    default:
        return <FAIcon name='question-circle' />
    }
}

export default TileIcon

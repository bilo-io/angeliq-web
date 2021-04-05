import React, { Component } from 'react'
import { VisionMap as Map } from 'components'

const defaultProps = {
    theme: 'dark'
}

const markers = [
    {
        label: 'Tigers Milk | Camps Bay',
        geometry: {
            coordinates: [18.3700495, -33.9504259]
        }
    },
    {
        label: 'Tigers Milk | Kloof Street',
        geometry: {
            coordinates: [18.4108578, -33.9298895]
        }
    },
    {
        label: 'Tigers Milk | Long Street',
        geometry: {
            coordinates: [18.4228499, -33.94212]
        }
    },
    {
        label: 'Tigers Milk | Claremont',
        geometry: {
            coordinates: [18.4548286, -33.9783434]
        }
    },
    {
        label: 'Tigers Milk | Muizenberg',
        geometry: {
            coordinates: [18.4606702, -34.1080387]
        }
    }
]

export const ScreenMap = (props) => {
    const { theme } = props

    return <div id='screen-map' style={{
        position: 'relative',
        height: 'calc(100vh - 3rem - 1px)'
    }}
    >
        <Map
            theme={ theme }
            // pins={ markers }
            points={ markers }
        />
    </div>
}

ScreenMap.defaultProps = defaultProps

export default ScreenMap

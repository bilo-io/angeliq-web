
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { WidgetMediaVideo } from 'widgets'

export const PanelVideo = ({ children, src }) => <div style={{ position: 'relative' }}>
    <WidgetMediaVideo
        style={{
            position: 'absolute',
            objectFit: 'cover',
            right: '0',
            bottom: '0',
            minWidth: '100%',
            minHeight: '480px'
        }}
        data={{
            src
        }}
        options={{
            width: '100%',
            height: '100%'
        }}
    />
    <div className='video-panel'>
        {
            children
        }
    </div>
</div>

export default PanelVideo

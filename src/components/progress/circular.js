import React from 'react'

export const Circular = ({
    diameter,
    progress,
    color,
    style,
    strokeWidth,
    ...rest
}) => {
    const circumference = Math.PI * diameter
    return <div { ...rest } style={{
        ...style,
        position: 'relative',
        width: diameter + 'px',
        height: diameter + 'px',
    }}>
        <svg width={'100%'} height={ '100%' }>
            <circle
                cx='50%'
                cy='50%'
                r='42%'
                fill='transparent'
                strokeWidth={ strokeWidth || 3 }
                stroke={ `#ffffff`}
            />
            <circle
                cx='50%'
                cy='50%'
                r='42%'
                fill='transparent'
                strokeWidth={ strokeWidth || 3 }
                stroke={ color }
                strokeDasharray={`${circumference * progress} ${circumference}`}
            />
        </svg>
    </div>
}

export default Circular
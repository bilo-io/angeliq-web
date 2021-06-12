import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ children, style, className, width, height, margin, ...rest }) => (
    <div
        className={`card card-1 ${className}`}
        style={{
            width,
            height,
            margin,
            ...style
        }}
        { ...rest }
    >
        { children }
    </div>
)

export default Card

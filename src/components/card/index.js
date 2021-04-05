import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ children, className, width, height, margin, ...rest }) => (
    <div
        className={`card card-1 ${className}`}
        style={{
            width,
            height,
            margin
        }}
        { ...rest }
    >
        { children }
    </div>
)

export default Card

import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ children, className, color, ...rest }) => (
    <input
        className={`vision-input ${
            color !== undefined
                ? ' ' + color
                : ' '
        }${
            className !== undefined
                ? ' ' + className
                : ' '
        }`}
        { ...rest }
    />
)

export default Input

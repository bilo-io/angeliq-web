import React from 'react'
import FAIcon from 'react-fontawesome'

export const getStatusIcon = (type, props = {}) => {
    return <FAIcon name={ getStatusIconName(type) } { ...props } />
}

export const getStatusIconName = (type) => {
    const iconMappings = {
        primary: 'triangle',
        success: 'check-circle',
        secondary: 'info-circle',
        warning: 'question-circle'
    }
    return iconMappings[type] || 'question-circle'
}

export default {
    icon: getStatusIcon,
    iconName: getStatusIconName
}

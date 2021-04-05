import React from 'react'

const defaultProps = {
    color: 'light'
}
export const PanelImage = ({
    title,
    children,
    color,
    img,
    isPadded,
    ...rest
}) => <div
    id={ rest.id }
    className={`panel ${color}`}
    style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center'
    }}>
    <div className={'title'}>{ title }</div>
    <div className={'panel-content'}>{ children }</div>
    {/* { children } */}
</div>

PanelImage.defaultProps = defaultProps

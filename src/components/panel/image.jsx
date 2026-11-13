import React from 'react'

export const PanelImage = ({
    title,
    children,
    color = 'light',
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

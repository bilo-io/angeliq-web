import React from 'react'
import FAIcon from 'react-fontawesome'
export const AppBar = ({
    toggleAppMenu
}) => {
    return (
        <div
            className="flex-row space-between"
            style={{
                position: 'absolute',
                zIndex: 11,
                width: '100%',
                height: '3rem',
                boxShadow: '0px 3px 10px #999',
                backgroundColor: '#fff'

            }}>
            <button style={{ padding: '0.5rem', marginLeft: '0.5rem', backgroundColor: 'transparent' }} onClick={toggleAppMenu}>
                <FAIcon name='bars' />
            </button>
            <div style={{ fontFamily: '\'Dancing Script\', cursive', lineHeight: '3rem', fontSize: '1.2rem', color: '#FF4165' }}>
                    AngeliQ
            </div>
            <button style={{ padding: '0.5rem', marginRight: '0.5rem', backgroundColor: 'transparent' }}>
                <FAIcon name='question-circle' />
            </button>
        </div>
    )
}

export default AppBar

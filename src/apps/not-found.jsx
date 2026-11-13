import React, { Component } from 'react'
import { withRouter } from 'react-router'

export const NotFound = (props) => {
    return <div className='page'>
        <div className='card card-1 padded' style={{
            margin: 'auto',
            maxWidth: '20rem',
            marginTop: '2rem',
            borderRadius: '4px'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>404: Page not found</div>
            <br />
            <p>
                It appears the page you are looking for cannot be found.
            </p>
            <pre>
                <code>
                    {window.location.origin}{window.location.pathname}
                </code>
            </pre>
            <button onClick={ () => props.history.push('/')}>
                Go to Vision Studio
            </button>
        </div>
    </div>
}

export default withRouter(NotFound)

import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { toPng } from 'dom-to-image'
// import { Accordion } from '../'

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
        isExpanded: false
    }

    static getDerivedStateFromError (error) {
        console.log({ message: error.message, stack: error.stack })
        // if (/Loading chunk [\d]+ failed/.test(error.message)) {
        //     console.log('RELOADING WINDOW')
        //     window.location.reload()
        // }
        return { hasError: true, message: error.message, stack: error.stack.split('\n') }
    }

    contactSupport = () => {
        console.log('TODO: <ErrorBoundary/>.contactSupport')
        this.captureScreen()
    }

    captureScreen = () => {
        const node = document.getElementById('angeliq-app-root')
        console.log('exportTo.png', node)

        toPng(node)
            .then((dataUrl) => {
                this.setState({
                    screenShot: dataUrl
                })

                console.log('screenshot', dataUrl)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render () {
        const {
            message,
            stack,
            isExpanded,
            hasError
        } = this.state

        const {
            children
        } = this.props

        return hasError
            ? <div className='error-boundary' style={{ color: 'white' }}>
                <div className='heading flex-row'>
                    <FAIcon name='exclamation-circle' style={{ marginRight: '1rem', marginTop: '2px' }} />
                    <div>ErrorBoundary</div>
                </div>
                <br />
                <div className='message flex-row space-between'>
                    <div className='message'>
                        { JSON.stringify(message) }
                    </div>
                    <div onClick={ () => this.setState({ isExpanded: !this.state.isExpanded }) }>
                        <FAIcon name={ isExpanded ? 'chevron-up' : 'chevron-down' } style={{ marginTop: '1rem', marginRight: '1rem' }}/>
                    </div>
                </div>
                <div className='stack'>
                    { isExpanded
                        ? <div className='stack'>{JSON.stringify(stack)}</div>
                        : '...' }
                </div>
                <br />
                <div>
                    <button onClick={ this.contactSupport }>
                        Contact Support
                    </button>
                </div>
            </div>
            : children
    }
}

export default ErrorBoundary

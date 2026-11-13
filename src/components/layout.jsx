import React, { Component } from 'react'
import { Navbar } from './navbar'
import SplitPane from 'react-split-pane'
import '../styles/index.scss'

export class Layout extends Component {
    static defaultProps = {
        isLeftDark: true,
        isRightDark: false
    }
    render () {
        const { leftDiv, rightDiv, isLeftDark, isRightDark } = this.props

        return <SplitPane
                split='vertical'
                defaultSize={ 300 }
                minSize={ 54 }
                maxSize={ 600 }
                style={{
                    position: 'relative',
                    height: '100vh'
                }}
            >
                { leftDiv &&  <div className={`layout-panel ${isLeftDark ? 'dark' : ''}`} style={{ color: '#888'}}>{ leftDiv }</div> }
                { rightDiv && <div className={`layout-panel ${isRightDark ? 'dark' : ''}`}>{ rightDiv }</div> }
            </SplitPane>
    }
}

export default Layout

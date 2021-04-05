import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { Accordion, Code, Markdown, Layout, JsonInput, Tabs } from 'components'
import data from 'demo/mock-data/1d'
import options from './config'

export class Slides extends Component {
    state = {
    }

    setChartType = e => {
        this.setState({
            chartType: e.target.value
        })
    }

    componentDidMount () {
    }

    onChange = e => {
    }

    render () {
        return <div className='page'>
            <Layout
                rightDiv={
                    <div>
                        <div className='page-header padded flex-row space-between'>
                            Settings
                        </div>
                        <div className='divider horizontal' />
                    </div>
                }
                leftDiv={
                    <div>
                        <div className='page-header padded flex-row space-between'>
                            <div className='flex-row auto-scroll-x'>
                                <FAIcon className='icon' name={ options.icon } />
                                <br />
                                <div className='title'>{ options.name }</div>
                            </div>
                        </div>
                        <div className='divider horizontal' />
                        <div>
                            <Accordion isOpenDefault title={'General'}>
                                <ul>
                                    <div className='sidebar-item'>App Icon (pro)</div>
                                    <div className='sidebar-item'>Color Theme</div>
                                    <div className='sidebar-item'>Custom theme (pro)</div>
                                </ul>
                            </Accordion>
                            <div className='divider horizontal' />
                            <Accordion isOpenDefault title={'Security'}>
                                <ul>
                                    <div className='sidebar-item'>Confirmation Modals (save, cancel, delete)</div>
                                </ul>
                            </Accordion>
                            <div className='divider horizontal' />
                            <Accordion isOpenDefault title={'Region'}>
                                <ul>
                                    <div className='sidebar-item'>Language & Voice Gender</div>
                                    <div className='sidebar-item'>Currency</div>
                                </ul>
                            </Accordion>
                            <div className='divider horizontal' />
                            <Accordion isOpenDefault title={'Workspace'}>
                                <ul>
                                    <div className='sidebar-item'>Users & Permissions</div>
                                    <div className='sidebar-item'>Group Name</div>
                                    <div className='sidebar-item'>Icon</div>
                                </ul>
                            </Accordion>
                        </div>
                    </div>
                }
            />
        </div>
    }
}

export default Slides

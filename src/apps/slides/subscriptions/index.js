import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { Code, Markdown, Layout, JsonInput, Tabs } from 'components'
import data from 'demo/mock-data/1d'
import options from './config'

export class Subscriptions extends Component {
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
                rightDiv={ <div>
                    <h1>Subscriptions</h1>
                </div> }
                leftDiv={
                    <Tabs
                        defaultTab='config'
                        keys={['slides']}
                        slides={
                            <div>
                                <div className='page-header padded'>
                                    <FAIcon className='icon' name={ options.icon } />
                                    <br />
                                    <div className='title'>{ options.name }</div>
                                </div>
                                <div className='divider horizontal'/>
                            </div>
                        }
                    />
                }
            />
        </div>
    }
}

export default Subscriptions

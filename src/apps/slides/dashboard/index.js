// #region Modules
import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {
    Avatar,
    Accordion,
    LayoutPreview,
    VisionMap as Map
} from 'components'
// #endregion

// #region Misc
import options from './config'
import visionLogo from 'img/vision-logo.png'
// #endregion

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser
    }
}
const mapActionsToProps = dispatch => bindActionCreators({
}, dispatch)

export const Dashboard = (props) => {
    const { user } = props

    return <div className='page dark'>
        <br />
        <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={ visionLogo } style={{ width: '6rem', margin: 'auto' }} />
            <div>
                <h2>Vision.Slides</h2>
                <h1>{ options.name }</h1>
                <br />
                <Avatar user={ user } style={{ margin: 'auto', width: 'max-content' }} />
                <br />
            </div>
        </div>
        <br />
        <div className='divider horizontal' />
        <div>
            <Accordion isOpenDefault title={'Overview'}>
                <div className='padded'>
                    <p>Logo & Name</p>
                    <p>Count of: Members, Screens, Slideshows, Schedules</p>
                    <p>Stats</p>
                </div>
            </Accordion>
            <div className='divider horizontal' />
            <Accordion isOpenDefault title={'Apps'}>
                <div className='padded'>
                    <p>Lists a few apps that the user has added auth keys for</p>
                </div>
            </Accordion>
            <div className='divider horizontal' />
            <Accordion isOpenDefault title={'Stats'}>
                <div className='padded'>
                    <p>Shows stats & graphs on some basic usage, filterable by time period. (screens in action, schedules, slideshows, users, screentime, etc.)</p>
                </div>
            </Accordion>
            <div className='divider horizontal' />
            <Accordion isOpenDefault title={'Screens'}>
                <div style={{ height: '60vh' }}>
                    <Map theme='dark' markers={[]} points={[]}/>
                </div>
            </Accordion>
            <div className='divider horizontal' />
            <Accordion isOpenDefault title={'Slideshows'}>
                <div className='padded'>
                    <p>Pager of 3 recent slideshows ... click to view more (redirects)</p>
                </div>
            </Accordion>
            <div className='divider horizontal' />
            <Accordion isOpenDefault title={'Schedules'}>
                <div className='padded'>
                    <p>Big Cards showing svg preview (re-use component)</p>
                </div>
            </Accordion>
        </div>
    </div>
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Dashboard))

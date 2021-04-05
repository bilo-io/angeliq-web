// #region Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// #endregion

import { Avatar } from 'components'
import {
    logOut
} from 'data/redux/session/actions'

import visionLogo from 'img/vision-logo-2-blue.png'

const supportedPlatforms = {
    blogger: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Blogger-01-256.png',
        url: 'https://www.blogger.com/'
    },
    facebook: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Facebook-01-256.png',
        url: 'http://www.facebook.com'
    },
    github: {
        logo: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png',
        url: 'http://www.github.com'
    },
    instagram: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Instagram-01-512.png',
        url: 'http://www.instagram.com'
    },
    linkedin: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Linked_In-01-256.png',
        url: 'http://www.linkedin.com'
    },
    pinterest: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Pinterest-01-256.png',
        url: 'https://pinterest.com/'
    },
    skype: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Skype-01-256.png',
        url: 'https://www.skype.com/en/'
    },
    snapchat: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Snapchat-01-256.png',
        url: 'https://www.snapchat.com/'
    },
    soundcloud: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Google_Plus-01-256.png',
        url: 'https://soundcloud.com/bilo-midnite'
    },
    spotify: {
        logo: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_spotify-512.png',
        url: 'https://open.spotify.com/search/'
    },
    twitter: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Twitter-01-256.png',
        url: 'http://www.twitter.com'
    },
    vimeo: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/Vimeo-01-256.png',
        url: 'https://vimeo.com/'
    },
    youtube: {
        logo: 'https://cdn4.iconfinder.com/data/icons/social-media-2110/64/YouTube-01-256.png',
        url: 'http://www.youtube.com'
    },
    deviantart: {
        logo: 'https://images.vexels.com/media/users/3/137250/isolated/preview/faeefae02621730a25cb072755c6483a-deviantart-icon-logo-by-vexels.png',
        url: 'https://www.deviantart.com/'
    }
}

const mapStateToProps = state => ({
    user: state.session.currentUser,
    workspaces: state.session.workspaces
})

const mapActionsToProps = dispatch => bindActionCreators({
    // addToast,
    // setVideoModal
    logOut
}, dispatch)

export class AppMenu extends Component {
    static propTypes = {
        user: PropTypes.object,
        socialAccount: PropTypes.object,
        theme: PropTypes.string,
        appName: PropTypes.string,
        appVersion: PropTypes.string,
        onToggle: PropTypes.func.isRequired
    }

    static defaultProps = {
        socialAccount: {},
        theme: 'dark',
        appName: 'App Name',
        appVersion: 'v0.0.1',
        onToggle: () => console.log('<AppMenu>.onToggle: UNDEFINED')
    }

    state = {
        appName: null
    }

    componentDidMount () {
        this.adaptToPath()
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.adaptToPath()
    }

    goTo = path => () => {
        this.props.onToggle()
        this.props.history.push(path)
    }

    adaptToPath = () => {
        const { pathname } = this.props.history.location
        const appName = pathname.split('/')[2]
        console.log({ appName })
        this.setState({
            appName
        })
    }

    logOut = () => {
        this.props.logOut()
        this.goTo('/auth/login')()
        this.props.onToggle()
    }

    render () {
        const {
            onToggle,
            isOpen,
            socialAccount,
            appVersion,
            theme,
            user
        } = this.props
        const { appName } = this.state

        const platforms = Object.keys(socialAccount).length > 0 ? socialAccount : supportedPlatforms

        const dividerStyle = {
            width: '16rem',
            margin: 'auto',
            marginTop: '1rem',
            marginBottom: '1rem'
        }
        return <div className={`vision-app-menu ${theme} ${isOpen ? '' : 'hidden'}`}>
            {/* HEADER */}
            <div className='top'>
                <div className='icon' onClick={ onToggle }>
                    <FAIcon name='times' />
                </div>
                <div className='logo'>
                    {/* <img src={ visionLogo } /> */}
                </div>
                <div className='user'>
                    <Avatar user={ user } hideUsername hideEmail/>
                </div>
            </div>
            {/* BODY */}
            <div className='content'>
                <div className='flex-col'>
                    <div className='title logo-font'>{ appName }</div>
                    <div className='version'>{ appVersion }</div>
                </div>
                <div>
                    <div className='link' onClick={ this.goTo('/')}>
                        <FAIcon name='home' />&nbsp;&nbsp;
                        Home
                    </div>
                    <div className='link' onClick={ this.goTo('/app/identity/profile')}>
                        <FAIcon name='user' />&nbsp;&nbsp;
                        Account
                    </div>
                    <div className='divider horizontal' style={ dividerStyle } />
                        Apps
                    <div className='divider horizontal' style={ dividerStyle } />
                    {
                        [
                            'slides',
                            'schools',
                            'stats',
                            'stops',
                            'crypton',
                            'core'
                        ].map((appName, i) => (
                            <div
                                key={ `${appName}${i}` }
                                className='link'
                                onClick={ this.goTo(`/app/${appName}`)}>
                                { appName }
                            </div>
                        ))
                    }
                    <div className='divider horizontal' style={ dividerStyle } />
                    <div className='link' onClick={ this.logOut }>
                        <FAIcon name='door-open' />&nbsp;&nbsp;
                        Log Out
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className='bottom'>
                <div className='links'>
                    <a href={ window.location.toString() }>Terms</a>
                    <a href={ window.location.toString() }>Privacy</a>
                    <a href={ window.location.toString() }>Contact</a>
                    <a href={ window.location.toString() }>About</a>
                </div>
                <div className='platforms'>
                    <div className='flex-row' style={{ margin: 'auto', flexWrap: 'wrap' }}>
                        {
                            Object.keys(platforms).map((id, i) => <div key={ i } title={ id }>
                                <a target='_blank' href={ platforms[id].url || platforms[id] || supportedPlatforms[id].url }>
                                    <img src={ supportedPlatforms[id].logo } className='icon' />
                                </a>
                            </div>)
                        }
                    </div>
                </div>
                <div className='languages'>
                    <div></div>
                    <select style={{ position: 'absolute', right: '2rem', bottom: '2.5rem' }}>
                        <option>English (UK)</option>
                        <option>English (US)</option>
                        <option>German (DE)</option>
                        <option>French (FR)</option>
                    </select>
                </div>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(AppMenu))

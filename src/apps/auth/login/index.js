// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import { AUTH } from 'util/firebase'
import { AQPurple, AQPink } from 'util/colors'
// #endregion Modules

// #region Misc
import {
    setUser,
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
// #endregion

// #region Assets & Data
import visionLogo from 'img/vision-logo-2-blue.png'
import { providerLogos } from './provider-logos'
// #endregion
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser
    }
}
const mapActionsToProps = dispatch => bindActionCreators({
    addToast,
    setUser,
    setVideoModal
}, dispatch)

export class Login extends Component {
    loginWith = (providerName) => () => {
        let provider

        switch (providerName) {
        case 'google':
            provider = new firebase.auth.GoogleAuthProvider()

            provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

            // TODO: tie into translation util
            AUTH.languageCode = 'en'

            provider.setCustomParameters({
                login_hint: 'user@example.com'
            })

            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log({
                        token: result.token,
                        user: result.user
                    })
                    // TODO: set user
                    this.props.setUser({ ...result.user, token: result.token })
                    // TODO: check url for redirect/hash
                    this.props.history.push('/app/profile')
                })
                .catch((error) => {
                    var errorCode = error.code
                    var errorMessage = error.message
                    var email = error.email
                    var credential = error.credential
                    console.log({ error })
                })
            break

            // TODO: add auth cases for: email, facebook, github

        default:
            alert(`Auth Provider not configured: "${providerName}"`)
            break
        }
    }

    render () {
        return (
            <div className='page gradient-background'>
                <div className='flex-col' style={{ maxWidth: '15rem', margin: 'auto' }}>
                    <br />
                    <div style={{ fontSize: '2rem', textAlign: 'center', color: 'white' }}>AngeliQ</div>
                    <br />
                    <img src={ visionLogo } style={{ width: '6rem', height: '6rem', margin: 'auto' }} />
                    <br />
                    <button className='auth google' onClick={ this.loginWith('google') }>
                        <img src={ providerLogos.google } />
                        Sign in with Google
                    </button>
                    <button className='auth github' onClick={ this.loginWith('github') }>
                        <img src={ providerLogos.github } />
                        Sign in with Github
                    </button>
                    <button className='auth facebook' onClick={ this.loginWith('facebook') }>
                        <img src={ providerLogos.facebook } />
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login))

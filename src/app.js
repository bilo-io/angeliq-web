// #region Modules
import React, {
    useEffect,
    useState
} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// #endregion

// #region Components
import AppMenu from './components/app-menu'
import AppBar from './components/app-bar'
import Async from './components/async'
import Navbar from './components/navbar/mobile'
import { Toaster } from './components/toaster'
import VideoModal from './components/modal/video'
import { ErrorBoundary } from './components/error-boundary'
import { Loader, LoaderType } from './components/spinner'
// #endregion

// #region Pages
import StudioHome from './apps/web/studio'
import NotFound from './apps/not-found'
// #endregion

// #region Misc
import {
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import './styles/index.scss'
import './assets/favicon.ico'
import visionLogo from 'img/angelic-pink.png'
import pkg from '../package.json'
import {
    fetchIPAddress,
    fetchCountryForIP
} from 'util/apis/ip'
// #endregion

// #region Routers
import IdentityRouter from './apps/auth/router'
const AppRouter = React.lazy(() => import(/* webpackChunkName:"app-router" */ './apps/app/router'))
const WebRouter = React.lazy(() => import(/* webpackChunkName: "app-web" */ './apps/web/router'))
// #endregion

console.log(`${pkg.name}: v${pkg.version}`)

// #region Redux
const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    schedule: state.session.schedule,
    toasts: state.session.toasts,
    toast: state.session.toast,
    isVideoModalOpen: state.session.isVideoModalOpen
})

const mapActionsToProps = dispatch => bindActionCreators({
    addToast,
    setVideoModal
}, dispatch)
// #endregion

export const App = (props) => {
    // #region STATE
    const { isVideoModalOpen, toasts, toast } = props
    const [isAppMenuOpen, setIsAppMenuOpen] = useState(false)
    const [isInitialising, setIsInitialising] = useState(true)
    const [isLoading, setIsLoading] = useState({
        ipAddress: true,
        country: true
    })
    const [data, setData] = useState({
        ipAddress: null,
        country: null
    })
    // #endregion

    // #region  LIFECYCLE
    useEffect(() => {
        setTimeout(() => setIsInitialising(false), 2000)
        initialize()
    }, [])
    // #endregion

    // #region MISC
    const toggleAppMenu = () => {
        navigator.vibrate(200)
        setIsAppMenuOpen(!isAppMenuOpen)
    }
    const logoStyle = {
        width: '4rem',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    const initialize = () => {
        // fetchLocationInfo()
        setIsLoading({
            ...isLoading,
            country: false,
            ipAddress: false
        })
    }
    const fetchLocationInfo = () => {
        // TODO connect to redux
        console.log('fetching ip address')
        fetchIPAddress()
            .then(response => {
                const ipAddress = response.ip
                setData({
                    ...data,
                    ipAddress
                }).then(value => {
                    fetchCountry()
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading({
                    ...isLoading,
                    ipAddress: false
                })
            })
    }

    const fetchCountry = () => {
        console.log('fetching country')
        fetchCountryForIP(data.ipAddress)
            .then(response => {
                console.log(response)
                setData({
                    ...data,
                    country: response
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading({
                    ...isLoading,
                    country: false
                })
            })
    }
    // #endregion

    // #region RENDER
    return <Router>
        <div
            id='vision-studio-app-root'
            className='fullscreen'
        >
            {
                isInitialising
                    ? <div className='page flex-col' style={{ paddingTop: 'calc(10% + 4rem)' }}>
                        <div className='loader' />
                        <img className='pulsing' src={ visionLogo } style={ logoStyle } />
                    </div>
                    : <div className='layout'>
                        <ErrorBoundary>
                            <AppBar
                                toggleAppMenu={toggleAppMenu}
                            />
                        </ErrorBoundary>
                        <Async
                            isLoading={ isLoading.ipAddress }
                            onMount={ initialize }
                        >
                            <ErrorBoundary>
                                <Navbar
                                    onToggle={ toggleAppMenu }
                                    items={[
                                        {
                                            icon: 'cog',
                                            path: '/app/settings'
                                        },
                                        {
                                            icon: 'heart',
                                            path: '/app/likes'
                                        },
                                        {
                                            icon: 'search',
                                            path: '/app/search',
                                            main: true
                                        },
                                        {
                                            icon: 'comment',
                                            path: '/app/chat'
                                        },
                                        {
                                            icon: 'user',
                                            path: '/app/profile'
                                        }
                                    ]}
                                    // openVideoModal={ () => props.setVideoModal(true) }
                                />
                            </ErrorBoundary>

                            <ErrorBoundary>
                                <AppMenu
                                    appName={'studio.vis-ion'}
                                    appVersion={ pkg.version }
                                    isOpen={ isAppMenuOpen }
                                    theme={ 'light' }
                                    onToggle={ toggleAppMenu }
                                    socialAccount={{
                                        instagram: 'http://www.instagram.com/bilo_lwabona',
                                        github: 'http://www.github.com/bilo-io'
                                    }}
                                />
                            </ErrorBoundary>
                            {/* <Async
                                isLoading={ isLoading.country }
                                onMount={ fetchCountry }
                            > */}
                            <Switch>
                                <ErrorBoundary>
                                    <React.Suspense fallback={<div className='page'>
                                        <div className='loader' style={{ marginTop: 'calc(50vh - 2rem)' }} />
                                    </div>
                                    }>
                                        <Route
                                            exact
                                            path={'/'}
                                            render={ () => <Redirect to={'/app'} /> }
                                        />

                                        {/* Auth */}
                                        <Route path={'/auth'} component={ IdentityRouter } />
                                        {/* App */}
                                        <Route path='/app' render={ () => <AppRouter /> } />
                                        {/* Websites */}
                                        <Route path={'/web'} component={ WebRouter } />
                                    </React.Suspense>
                                </ErrorBoundary>
                            </Switch>
                        </Async>
                        {/* </Async> */}
                        <ErrorBoundary>
                            <VideoModal
                                isOpen={ props.isVideoModalOpen }
                                onClose={ () => props.setVideoModal(false) }
                            />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <Toaster toast={toast} />
                        </ErrorBoundary>
                    </div>
            }
        </div>
    </Router>
    // #endregion
}

export default connect(mapStateToProps, mapActionsToProps)(App)

import React from 'react'
import { withRouter } from 'react-router'
import FAIcon from 'react-fontawesome'
import appLogo from 'img/angelic-white.png'

export const Navbar = ({
    items,
    history
}) => {
    const goTo = (path) => history.push(path)

    return (
        <div className="mobile-navbar flex-row space-between">
            {
                (items || []).map((item, i) => {
                    const isActive = window.location.pathname.includes(item.path)
                    return (
                        <div
                            onClick={() => goTo(item.path)}
                            className={ item.main ? 'main-tab' : 'normal-tab'}
                        >
                            {
                                item.main ? (
                                    <img src={ appLogo } style={{ width: '3rem', height: 'auto' }}/>
                                ) : (
                                    <FAIcon name={item.icon} style={{ color: isActive ? '#FF4165' : '#AAA' }}/>
                                )
                            }
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default withRouter(Navbar)

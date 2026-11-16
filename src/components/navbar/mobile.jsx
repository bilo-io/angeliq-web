import React from 'react'
import { withRouter } from 'util/with-router'
import FAIcon from 'react-fontawesome'
import appLogo from 'img/angelic-white.png'

// The Midnite bottom bar: blurred card strip, the main tab raised on the brand gradient.
export const Navbar = ({ items, history }) => {
    const goTo = (path) => history.push(path)

    return (
        <nav className="mobile-navbar-midnite absolute inset-x-0 bottom-0 z-10 flex h-14 items-center justify-around border-t border-border/80 bg-card/95 px-2 backdrop-blur-md">
            {(items || []).map((item) => {
                const isActive = window.location.pathname.includes(item.path)
                return item.main ? (
                    <button
                        type="button"
                        key={item.path}
                        aria-label="Discover"
                        onClick={() => goTo(item.path)}
                        className="aq-main-tab -mt-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-4 ring-background"
                    >
                        <img src={appLogo} alt="" className="h-auto w-9" />
                    </button>
                ) : (
                    <button
                        type="button"
                        key={item.path}
                        aria-label={item.icon}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => goTo(item.path)}
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                            isActive ? 'aq-active bg-accent' : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                        }`}
                    >
                        <FAIcon name={item.icon} />
                    </button>
                )
            })}
        </nav>
    )
}

export default withRouter(Navbar)

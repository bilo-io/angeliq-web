import React from 'react'
import { withRouter } from 'react-router'
import FAIcon from 'react-fontawesome'

export const Navbar = ({
    items,
    history
}) => {
    const goTo = (path) => history.push(path)

    return (
        <div className="mobile-navbar flex-row space-between">
            {
                (items || []).map((item, i) => (
                    <div
                        onClick={() => goTo(item.path)}
                        className={ item.main ? 'main-tab' : 'normal-tab'}
                    >
                        <FAIcon name={item.icon} />
                    </div>
                ))
            }
        </div>
    )
}

export default withRouter(Navbar)

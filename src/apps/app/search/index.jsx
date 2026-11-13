// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FAIcon from 'react-fontawesome'
// #endregion Modules

import {
    Card
} from 'components'
import { ProfileCard } from '../profile/card'

// #region Misc
import {
    setUser,
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import data from 'data/mock/search'
import { AQPink } from 'util/colors'
// #endregion

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.currentUser
    }
}
const mapActionsToProps = dispatch => bindActionCreators({
    // addToast,
    setUser,
    setVideoModal
}, dispatch)

export const Search = ({ user }) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const changeIndex = (diff) => {
        setLoading(true)
        const newIndex = activeIndex + diff
        setActiveIndex(newIndex >= data.length ? 0 : newIndex)
        setTimeout(() => setLoading(false), 500)
    }

    React.useEffect(() => {
        setIsMobile(visualViewport.width <= 512)
    }, [visualViewport.width])

    return (
        <div className='page'>
            {/* <div className='page-header padded flex-row space-between'>
                </div> */}
            <div className='divider horizontal' />
            <div className='padded'>
                <div style={{ marginTop: '3rem' }} />
                {
                    loading
                        ? <div className='loader' />
                        : <ProfileCard
                            fixed={ isMobile }
                            user={data[activeIndex]}
                            actions
                            onSwipeLeft={() => changeIndex(+1)}
                            onSwipeRight={() => changeIndex(+1)}
                        />
                }
                <div style={{ height: '2rem' }} />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Search))

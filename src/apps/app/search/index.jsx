// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { withRouter } from 'util/with-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FAIcon from 'react-fontawesome'
// #endregion Modules

import {
    Card
} from 'components'
import { DateCard } from 'components/aq/date-card'

// #region Misc
import {
    setUser,
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import data from 'data/mock/search'
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
    const [loading, setLoading] = React.useState(false)

    const changeIndex = (diff) => {
        setLoading(true)
        const newIndex = activeIndex + diff
        setActiveIndex(newIndex >= data.length ? 0 : newIndex)
        setTimeout(() => setLoading(false), 500)
    }

    return (
        <div className='page'>
            {/* <div className='page-header padded flex-row space-between'>
                </div> */}
            <div className='mx-auto max-w-sm px-4 pb-24 pt-16'>
                {
                    loading
                        ? <div className='loader' style={{ marginTop: '30vh' }} />
                        : <DateCard
                            profile={data[activeIndex]}
                            onPass={() => changeIndex(+1)}
                            onLike={() => changeIndex(+1)}
                            onSuper={() => changeIndex(+1)}
                        />
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Search))

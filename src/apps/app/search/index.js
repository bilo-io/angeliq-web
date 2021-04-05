// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// #endregion Modules

import {
    Avatar
} from 'components'

// #region Misc
import {
    setUser,
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
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

export class Search extends Component {
    render () {
        const { user } = this.props
        return (
            <div className='page'>
                <div className='page-header padded flex-row space-between'>
                    Search
                </div>
                <div className='divider horizontal' />
                <div className='padded'>
                    <Avatar user={ user } />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Search))

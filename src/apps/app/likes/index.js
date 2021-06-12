// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// #endregion Modules

import {
    Avatar,
    Card,
    Tabs
} from 'components'

import data from 'data/mock/search'

// #region Misc
import {
    setUser,
    addToast,
    setVideoModal
} from 'data/redux/session/actions'
import { ProfileCard } from '../profile/card'
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

export const Matches = () => {
    const [profile, setProfile] = useState(null)
    return (
        <div className='page'>
            <div style={{ marginTop: '3rem' }} />
            <Tabs
                defaultTab='sent'
                keys={['sent', 'received', 'recommended']}
                sent={
                    <div className='padded'>
                        <div className="flex-row flex-wrap place-center">
                            {
                                data.map((user) => (
                                    <div
                                        onClick={() => setProfile(user)}
                                        className='card'
                                        style={{
                                            width: '10rem',
                                            height: '14rem',
                                            marginRight: '0.5rem',
                                            marginBottom: '0.5rem',
                                            borderRadius: '4px',
                                            backgroundImage: `url(${user?.images?.[0]})`,
                                            backgroundSize: 'cover'
                                        }}>
                                        <div className="flex-row absolute" style={{ bottom: '1rem', left: '1rem', color: '#fff' }}>
                                            <div>{user.name},&nbsp;</div>
                                            <div>{user.age}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                received={
                    <div>Received</div>
                }
                recommended={
                    <div>Recommended</div>
                }
            />
            {
                profile && <div className='padded'
                    style={{
                        position: 'fixed',
                        left: '0rem',
                        top: '3rem',
                        backgroundColor: '#fff',
                        width: 'calc(100% - 2rem)',
                        height: '100%'
                    }}>
                    <ProfileCard
                        actions
                        user={profile}
                        onSwipeLeft={() => setProfile(null)}
                        onSwipeRight={() => setProfile(null)}
                        onUndoSwipe={() => setProfile(null)}
                        onSuperLike={() => setProfile(null)}
                        onClose={() => setProfile(null)}
                    />
                </div>
            }
            <div style={{ marginTop: '3rem' }} />
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Matches))

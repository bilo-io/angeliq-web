// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// #endregion Modules

import {
    Avatar,
    Tabs
} from 'components'
import ChatThread from './thread'

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

export const Chat = () => {
    const [chatProfile, setChatProfile] = useState(null)

    return (
        <div className='page no-scrollbar'>
            <div style={{ marginTop: '3rem' }} />
            <Tabs
                defaultTab='chats'
                keys={['chats', 'matches']}
                chats={
                    <div className='padded'>
                        {
                            data.slice(0, 2).map((profile) => (
                                <div onClick={() => setChatProfile(profile) }>
                                    <Avatar user={{ email: profile.name, name: profile.name, image: profile.images[0] }} />
                                </div>
                            ))
                        }
                    </div>
                }
                matches={
                    <div>
                        <div className='padded'>
                            {
                                data.slice(2).map((profile) => (
                                    <div onClick={() => setChatProfile(profile) }>
                                        <Avatar user={{ email: profile.name, name: profile.name, image: profile.images[0] }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            />
            <div className='no-scrollbar'
                style={{
                    position: 'absolute',
                    top: chatProfile ? '0rem' : '0',
                    left: chatProfile ? '0' : '100vw',
                    height: 'calc(100vh - 0rem)',
                    backgroundColor: 'white',
                    transition: 'all .3s ease-in-out',
                    zIndex: 12
                }}>
                <ChatThread
                    user={null}
                    otherUser={chatProfile}
                    goOnDate={() => console.log('go on date with ', chatProfile)}
                    goBack={() => setChatProfile(null)}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Chat))

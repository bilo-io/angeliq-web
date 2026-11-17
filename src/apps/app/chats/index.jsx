// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { withRouter } from 'util/with-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// #endregion Modules

import {
    Avatar,
    Tabs
} from 'components'
import ChatThread from './thread'
import { Link, useNavigate } from 'react-router'
import { Video } from 'lucide-react'

const LAST = ['See you at 19:30 at Café Lumière?', 'Haha, that sounds perfect', 'Sunrise surf this weekend?', 'Tapas on Friday?', 'What are you reading?']

const ChatRow = ({ profile, onOpen }) => (
    <div className='flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-accent'>
        <button type='button' onClick={onOpen} className='aq-bare flex min-w-0 flex-1 items-center gap-3 text-left'>
            <img src={profile.images[0]} alt='' className='h-14 w-14 shrink-0 rounded-full object-cover' />
            <span className='min-w-0'>
                <span className='block font-semibold text-foreground'>{profile.name}, {profile.age}</span>
                <span className='block truncate text-sm font-normal text-muted-foreground'>{LAST[profile.id % LAST.length]}</span>
            </span>
        </button>
        <Link to={`/app/video/${profile.id}`} aria-label={`Video call ${profile.name}`} className='aq-gradient inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow'>
            <Video className='h-4 w-4' />
        </Link>
    </div>
)

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
    const navigate = useNavigate()

    return (
        <div className='page no-scrollbar'>
            <div style={{ marginTop: '3rem' }} />
            <Tabs
                defaultTab='chats'
                keys={['chats', 'matches']}
                chats={
                    <div className='mx-auto max-w-xl px-2 py-2'>
                        {data.slice(0, 2).map((profile) => <ChatRow key={profile.id} profile={profile} onOpen={() => setChatProfile(profile)} />)}
                    </div>
                }
                matches={
                    <div>
                        <div className='mx-auto max-w-xl px-2 py-2'>
                            {data.slice(2).map((profile) => <ChatRow key={profile.id} profile={profile} onOpen={() => setChatProfile(profile)} />)}
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
                    goOnDate={() => navigate('/app/date')}
                    goBack={() => setChatProfile(null)}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Chat))

import React, { useState } from 'react'
import FAIcon from 'react-fontawesome'
import {
    Avatar
} from 'components'
import { ProfileCard } from '../profile/card'

export const ChatThread = ({ user, otherUser, goBack, goOnDate }) => {
    const [profile, setProfile] = useState(null)
    const [message, setMessage] = useState('')
    return (
        <>
            <div>
                {
                    otherUser && <div className='padded flex-row space-between' style={{ alignSelf: 'center', alignItems: 'center' }}>
                        <div>
                            <button onClick={() => {
                                setProfile(null)
                                goBack()
                            }}>
                                <FAIcon name="chevron-left" /> Chats
                            </button>
                        </div>
                        <button onClick={() => setProfile(otherUser)} style={{ width: '4rem', height: '4rem', borderRadius: '50%', margin: 'auto', alignSelf: 'center' }} >
                            <img src={otherUser.images[0] } style={{ width: '4rem', height: '4rem', borderRadius: '50%', margin: 'auto', alignSelf: 'center' }} />
                        </button>
                        <div>
                            <button onClick={goOnDate}>
                                <FAIcon name='calendar' /> Date <FAIcon name="chevron-right" />
                            </button>
                        </div>
                    </div>
                }
                <div className='divider horizontal' />
                <div className='no-scrollbar' style={{ width: '100vw', backgroundColor: '#fff' }}>
                    <div className='chat-thread' style={{ height: 'calc(100vh - 10rem)', overflowY: 'auto' }}>
                        {[
                            'Hello dear!',
                            'How are you doing?',
                            'I\'m well thanks and yourself?',
                            'I have seen better days ...but not better women. You are definitely at the top of the list there.',
                            'Soooo, tell me, how well do you think this chat interface works? Do you think voice notes, images and emojis have already been implemented? I am not entirely sure.',
                            'Well ... I guess we will just have to see...',
                            'Huh? ... why not just try',
                            'Yeah, sounds like a good proposal',
                            'So what do you say?',
                            '...',
                            '...',
                            'I say this app still has quite a lot of work left, before it can even be tested in a closed group.',
                            'Wise words ... I agree ... but it is off to a good start at least.'
                        ].map((message, i) => (
                            <div className={`${i % 2 !== 0 ? 'user-message' : 'message'}`}
                                style={{ width: 'fit-content', height: 'auto' }}>
                                {message}
                            </div>
                        ))}
                    </div>
                    <div className="padded" style={{ position: 'absolute', bottom: '0rem', left: '0rem', backgroundColor: '#fff' }}>
                        <div className='flex-row space-between'>
                            <div className='flex-row'>
                                <button>
                                    <FAIcon name='smile' />
                                </button>
                                <button>
                                    <FAIcon name='image' />
                                </button>
                                <button>
                                    <FAIcon name='microphone' />
                                </button>
                            </div>
                            <div>
                                <button>
                                Send &nbsp;<FAIcon name='paper-plane' />
                                </button>
                            </div>
                        </div>
                        <textarea
                            className='aq-input'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                {
                    profile && <div className='padded'
                        style={{
                            position: 'absolute',
                            left: '0rem',
                            top: '6rem',
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
            </div>
        </>
    )
}

export default ChatThread

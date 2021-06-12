import React from 'react'
import FAIcon from 'react-fontawesome'
import {
    Card
} from 'components'
import {
    WidgetInstagram
} from 'widgets'

const containerProps = {
    className: 'padded',
    style: {
        backgroundColor: '#FF4165',
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '3rem'
    }
}
const getData = (index, profile) => {
    switch (index) {
    case 0: return <div { ...containerProps }>
        {/* {profile.bio} */}
        {profile.specs}
    </div>
    case 1: return <div { ...containerProps }>
        {profile.interests}
    </div>
    case 2: return <div { ...containerProps }>
        {profile.quote}
    </div>
    case 3: return profile.instagram ? (
        <WidgetInstagram hashtag={profile.instagram} />
    ) : <div>
        <img src={ 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'} />
        <div>connect your instagram</div>
    </div>
    default: return <div style={{ marginTop: '-1rem' }}>Helloooo</div>
    }
}

const buttonStyle = {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0px 3px 10px rgba(0,0,0,0.3)',
    marginLeft: '1rem',
    marginRight: '1rem'
}

export const ProfileCard = ({
    user,
    fixed,
    actions,
    onSwipeLeft,
    onSwipeRight,
    onUndoSwipe,
    onSuperLike,
    onClose
}) => {
    const getImageStyle = (src) => ({
        background: `url(${src}) no-repeat center center ${fixed ? 'fixed' : ''}`,
        height: '70vh',
        backgroundSize: 'cover',
        // backgroundSize: 'auto 70vh',
        backgroundClip: 'content-box'
    })
    return (
        <Card className='no-scrollbar' style={{ position: 'relative', padding: 0, borderRadius: '2rem', height: '80vh', overflowY: 'auto', maxWidth: '30rem', margin: 'auto', backgroundColor: '#FF4165' }}>
            <div className="relative" style={getImageStyle(user.images[0])}>
                <h2 style={{ color: 'white', position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    {user.name}, {user.age}
                </h2>
            </div>
            <div { ...containerProps }>
                { user.bio}
            </div>
            <div>
                {
                    user.images.slice(1).map((image, index) => <>
                        <div className="relative" style={getImageStyle(image)}>
                        </div>
                        <div className="">
                            { getData(index, user) }
                        </div>
                    </>)
                }
            </div>
            {
                actions && (
                    <div className="flex-row" style={{ minHeight: '6rem', paddingTop: '1rem', margin: 'auto', justifyContent: 'center', backgroundColor: '#FF4165' }}>
                        <button onClick={onUndoSwipe} style={{ color: 'orange', ...buttonStyle, width: '2rem', height: '2rem', marginTop: '0.5rem' }}>
                            <FAIcon name="undo" />
                        </button>
                        <button onClick={onSwipeLeft} style={{ color: 'red', fontSize: '1.3rem', ...buttonStyle }}>
                            <FAIcon name="times" />
                        </button>
                        <button onClick={onSwipeRight} style={{ color: 'limegreen', fontSize: '1.3rem', ...buttonStyle }}>
                            <FAIcon name="heart" />
                        </button>
                        <button onClick={onSuperLike} style={{ color: '#3366FF', ...buttonStyle, width: '2rem', height: '2rem', marginTop: '0.5rem' }}>
                            <FAIcon name="star" />
                        </button>
                    </div>
                )
            }
            {
                onClose && <button onClick={ onClose } style={{ position: 'absolute', left: '1rem', top: '1rem', color: '#fff', backgroundColor: 'transparent' }}>
                    <FAIcon name='times' />
                </button>
            }
        </Card>
    )
}

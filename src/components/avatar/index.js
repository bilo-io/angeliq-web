// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

export const Avatar = ({
    user,
    style,
    hideUsername,
    hideEmail,
    imgRight
}) => {
    const ProfilePicture = <img
        no-referrer
        className='card-1'
        // TODO: swap out hardcoded URL with: src={ user.photoURL }
        src={ 'https://avatars0.githubusercontent.com/u/3089012?v=4' }
        style={{
            width: '4em',
            borderRadius: '2em',
            marginRight: '1em',
            marginTop: '0.2em'
        }}
    />

    return <div className='flex-row' style={ style }>
        { !imgRight && ProfilePicture }
        <div className='flex-col'>
            { !hideUsername && <div style={{
                fontSize: '1.1em',
                fontWeight: 'bold',
                marginTop: '0.5rem',
                marginBottom: '0.5rem'
            }}>
                { user.displayName }
            </div> }
            { !hideEmail && <div>{ user.email }</div> }
        </div>
        { imgRight && ProfilePicture }
    </div>
}

Avatar.propTypes = {
    user: PropTypes.object,
    style: PropTypes.object,
    hideUsername: PropTypes.bool,
    hideEmail: PropTypes.bool
}

Avatar.defaultProps = {
    user: {
        email: 'unknown@email.address',
        displayName: 'Unknown User'
    },
    hideUsername: true,
    hideEmail: false
}

export default Avatar

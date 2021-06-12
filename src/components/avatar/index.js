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
        src={ user.image || user.photoURL || user.photoUrl || 'https://avatars0.githubusercontent.com/u/3089012?v=4' }
        style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '2em',
            marginRight: '1em',
            marginTop: '0.2em'
        }}
    />

    return <div className='flex-row' style={ style }>
        { !imgRight && ProfilePicture }
        <div className='flex-col'>
            <div style={{
                fontSize: '1.1em',
                fontWeight: 'bold',
                marginTop: '0.5rem',
                paddingTop: (hideEmail || hideUsername)
                    ? '0rem'
                    : '0rem',
                marginBottom: '0.5rem'
            }}>
                { user.name || user.displayName }
            </div>
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
    hideUsername: false,
    hideEmail: true
}

export default Avatar

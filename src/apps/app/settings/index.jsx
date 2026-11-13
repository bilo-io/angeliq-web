// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FAIcon from 'react-fontawesome'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
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

export const Settings = ({ user, history }) => {
    const [ageRange, setAgeRange] = useState([18, 35])
    const [distance, setDistance] = useState(10)
    return (
        <div className='page'>
            <div style={{ marginTop: '3rem' }} />
            <div className='divider horizontal' />
            <div className='padded'>
                <div onClick={() => history.push('/app/profile')}>
                    <Avatar user={ user } />
                </div>
                <br />
                <div className='divider horizontal'/>
                <h4>Discovery</h4>
                <br />
                <br />
                <div>Preference</div>
                <br />
                <select>
                    {
                        [
                            {
                                label: 'Women',
                                key: 'women'
                            },
                            {
                                label: 'Men',
                                key: 'men'
                            },
                            {
                                label: 'Everyone',
                                key: 'all'
                            }
                        ].map((option) => (
                            <option value={option.key}>{option.label}</option>
                        ))
                    }
                </select>
                <br />
                <br />
                <div>Age range ({ageRange[0]} - {ageRange[1]})</div>
                <br />
                <br />
                <Range
                    value={ageRange}
                    onChange={(value) => setAgeRange(value)}
                    settings={{
                        start: 23,
                        min: 18,
                        max: 99,
                        step: 1
                    }}/>
                <br />
                <br />
                <div>Max distance ({distance}km)</div>
                <br />
                <Slider
                    value={distance}
                    onChange={(value) => setDistance(value)}
                    settings={{
                        start: 10,
                        min: 1,
                        max: 200,
                        step: 1
                    }} />
                <br />
                <div className='divider horizontal'/>
                <br />
                <button className='solid primary full-width' style={{ color: '#FF4165' }}>
                    <FAIcon name='map-marker'/>&nbsp;Cape Town, ZA
                </button>
                <br />

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Settings))

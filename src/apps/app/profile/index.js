// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import categories from './categories'
// #endregion Modules

import {
    Avatar,
    // Input,
    Select,
    Tabs
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

export class Profile extends Component {
    state = {
        bio: ''
    }

    updateField = (key) => (e) => {
        this.setState({
            [key]: e.target.value
        })
    }

    render () {
        const { user } = this.props
        const { bio } = this.state

        return (
            <div className='page'>
                <div style={{ marginTop: '3rem' }} />
                <div className='padded'>Profile</div>
                <div className='divider horizontal' />
                <div className='padded'>
                    <Tabs
                        defaultTab='edit'
                        keys={['edit', 'preview']}
                        edit={
                            <>
                                <div>
                                    <label>Add photos</label>
                                    <div className='divider horizontal' />
                                    <div style={{ width: '6rem', height: '8rem', borderRadius: '8px', backgroundColor: 'lightpink', textAlign: 'center', marginTop: '1rem' }}>
                                        <FAIcon name='plus' style={{ marginTop: '3.5rem', color: '#fff' }}/>
                                    </div>
                                    <br />
                                </div>

                                <br />

                                <div>
                                    <label>Bio</label>
                                    <div className='divider horizontal' />
                                    <br />
                                    <textarea
                                        className='aq-input'
                                        value={bio}
                                        onChange={this.updateField('bio')}
                                    />
                                </div>

                                <br />

                                {
                                    categories
                                        .filter(x => x.key !== 'height')
                                        .map((category, i) => (
                                            <div>
                                                <div>{ category.name }</div>
                                                <div>
                                                    { category.options && <select>
                                                        {
                                                            category.options.map((option) => (
                                                                <option value={ option.key }>{option.name}</option>
                                                            ))
                                                        }
                                                    </select>}
                                                    { category.input && <input { ...category.input } /> }
                                                </div>
                                                <br />
                                            </div>
                                        ))
                                }

                                <div className='flex-col'>
                                    <div>Connect Instagram</div>
                                    <div style={{ alignSelf: 'center' }}>
                                        <img src={'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-512.png'}
                                            style={{ width: '5rem', height: 'auto', margin: 'auto', marginTop: '2rem' }}
                                        />
                                    </div>
                                    <br />
                                </div>

                                <br />

                                <div className='flex-col'>
                                    <div>Connect Spotify</div>
                                    <div style={{ alignSelf: 'center' }}>
                                        <img src={'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-512.png'}
                                            style={{ width: '5rem', height: 'auto', margin: 'auto', marginTop: '2rem' }}
                                        />
                                    </div>
                                    <br />
                                </div>
                            </>
                        }
                        preview={
                            <>
                                <div>{ bio }</div>
                                <div>
                                    {
                                        categories.map((category) => (
                                            <div className="flex-row">
                                                <FAIcon name={category.icon} />
                                                <div>{category.options?.[0]?.name}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Profile))

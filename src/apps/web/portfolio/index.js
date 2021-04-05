// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
// #endregion Module

// #region Components
import { Tabs } from 'components'
import PanelVideo from 'components/panel/video'
// #endregion

// #region Assets & Data
import vidMatter from 'img/home/vision_matter.mp4'
import vidMatter2 from 'img/home/vision_matter_2.mp4'
const experiences = require('./experience')
const profilePic = 'https://media-exp1.licdn.com/dms/image/C4E03AQEgRh1THSiRKw/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=1lILU5SWKpRYtjnhui9WSyt8PnPqnRkxfdQNo8V8qA0'
// #endregion

export default class Portfolio extends Component {
    openUrl = (url) => () => {
        window.open(url, '_blank')
    }

    render () {
        const socialProfiles = [
            {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/bilolwabona/'
            },
            {
                icon: 'github',
                url: 'http://github.com/bilo-io'
            },
            {
                icon: 'twitter',
                url: ''
            },
            {
                icon: 'gitlab',
                url: 'https://gitlab.com/bilo.lwabona'
            },
            {
                icon: 'stack-overflow',
                url: 'https://stackoverflow.com/users/3795774/bilo-io'
            },
            {
                icon: 'unity',
                url: 'https://answers.unity.com/users/84651/bilolwabona.html#84651-activity-block'
            },
            {
                icon: 'skype',
                url: 'skype:bilo89za'
            }
        ]

        return (
            <div className='portfolio'>
                <PanelVideo src={ vidMatter }>
                    <div className='profile'>
                        <div className='title'>Tech</div>
                        <img src={ profilePic } />
                        <div className='xflex-col'>
                            <div className='name'>Bilo Lwabona</div>
                            <div className='flex-row' style={{ height: '1rem', color: 'white' }}>
                                {
                                    socialProfiles.map((profile, i) => <FAIcon name={ profile.icon } key={ i } style={{ margin: '0.2rem' }} />)
                                }
                            </div>
                        </div>
                    </div>
                    {
                        experiences.map((experience, i) => (
                            <div className='experience'>
                                <div className='flex-row'>
                                    <div className='dates'>
                                        { experience.startDate.getFullYear().toString() } - { experience.endDate.getFullYear().toString() }
                                    </div>
                                    <img src={ experience.logo } onClick={ this.openUrl(experience.website) }/>
                                    <Tabs
                                        defaultTab='EXPERIENCE'
                                        tabs={[
                                            'EXPERIENCE',
                                            'education',
                                            'skills',
                                            'misc',
                                            'tkd'
                                        ]}
                                        EXPERIENCE={
                                            <div className='header'>
                                                <div className='company-name'>{ experience.company }</div>
                                                <div className='employee-title'>{ experience.employeeTitle }</div>
                                                <div className='roles'>
                                                    {
                                                        experience.roles.map((role, i) => (
                                                            <div className='role'>
                                                                { role.name }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        } />
                                </div>
                            </div>
                        ))
                    }
                </PanelVideo>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Accordion, Code, VideoApp } from 'components'
import { PanelImage } from 'components/panel/image'
import { PanelVideo } from 'components/panel/video'
import data from 'demo/mock-data/1d'
import logo from 'img/vision-logo-2-blue.png'
import media from 'img/vision_mac_media_design.png'
import appStore from 'img/vision_app_store.png'
import matter from 'img/vision_shapes_matter.png'
import imgIntegration from 'img/vision_integration.png'

import vidApps from 'img/home/vision_apps.mp4'
import vidBanner from 'img/home/vision_banner.mp4'
import vidMatter from 'img/home/vision_matter.mp4'
import vidMatter2 from 'img/home/vision_matter_2.mp4'
import vidIntegration from 'img/home/vision_integration.mp4'
import vidSpacetime from 'img/home/vision_spacetime.mp4'
import vidTube from 'img/home/vision_tube.mp4'
const nodePackage = require('../../../../package.json')

export class StudioHome extends Component {
    state = {
        chartType: 'chart:line'
    }

    goTo = path => () => {
        this.props.history.push(`/slides/${path}`)
    }

    render () {
        return <div className='page flex-col space-between'>
            <PanelImage color='light'>
                <h2>visualize</h2>
                <img src={ matter } style={{
                    width: '35rem',
                    height: 'auto'
                }} />
                <p>vision is a digital visualisation platform</p>
            </PanelImage>
            <PanelVideo src={ vidMatter2 }>
                <img src={ logo }/>
                <div className='title'>collect, organize & visualise</div>
                <br />
                <div>auto-detect suitable Apps for given data types</div>
                {/* <button className='primary hollow'>Take a Look</button> */}
            </PanelVideo>
            <PanelVideo src={ vidMatter }>
                <img src={ logo }/>
                <div className='title'>collect, organize & visualise</div>
                <br />
                <div>auto-detect suitable Apps for given data types</div>
                {/* <button className='primary hollow'>Take a Look</button> */}
            </PanelVideo>
            {/* INTEGRATION */}
            <PanelImage color='black'>
                <h2>Schedule Slideshows on Screens</h2>
                <img src={ imgIntegration } style={{
                    width: '20rem',
                    height: 'auto'
                }} />
                <p>Vision is a digital visualisation platform</p>
            </PanelImage>
            <PanelVideo src={ vidIntegration }>
                {/* <img src={ logo }/> */}
                <div className='title'>Seamlessly Integrated System</div>
                <br />
                <div>Showcase your Digital Signboards to different audiences, within using one integrated system</div>
                <br />
                <button id='integration' className='primary hollow'>Watch Video</button>
            </PanelVideo>
            {/* APPSTORE */}
            {/* <PanelImage color='light'>
                <h2>Browse the Apps in the Store</h2>
                <p>A collection of Apps is at your grasp, to enrich the variety in media</p>
                <img src={ appStore } style={{
                    width: '30rem',
                    height: 'auto'
                }} />
            </PanelImage> */}
            <PanelVideo src={ vidApps }>
                <img src={ logo } />
                <div className='title'>Apps</div>
                <br />
                <div>Connect to existing Media with Applications</div>
                <br />
                <p>A collection of Apps is at your grasp, to enrich the variety in media</p>
                <div>
                    <img src={ appStore } style={{
                        width: '14rem',
                        height: 'auto'
                    }} />
                </div>
                <button id='apps' className='primary hollow'>Browse Apps</button>
            </PanelVideo>
            {/* USES */}
            <PanelVideo src={ vidTube }>
                <img src={ logo } />
                <div className='title'>Use Cases</div>
                <br />
                <div>Enrich your Signboards with Media from a variety of Applications</div>
                <br />
                <button id='use-cases' className='primary hollow'>Show Me</button>
            </PanelVideo>
        </div>
    }
}

export default withRouter(StudioHome)

const fetchRoles = async () => {

}

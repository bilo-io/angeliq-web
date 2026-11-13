import * as d3 from 'd3'
import React from 'react'
import {
    StoryWrapper
} from './wrapper'

import {
    // Media
    WidgetMediaAudio,
    WidgetMediaVideo,
    WidgetMediaText,
    WidgetMediaImage,
    // Social
    WidgetYoutube,
    WidgetInstagram,
    WidgetGoogle,
    WidgetVimeo,
    WidgetSoundcloud,
    // Time
    WidgetCalendar,
    WidgetClock,
    WidgetCountdown,
    WidgetWorldClock,
    WidgetNews
} from '../widgets'

export default { title: 'Widgets' }

const galleryLink = 'https://github.com/d3/d3/wiki/Gallery'

// #region MEDIA

export const Image = {
    name: 'Media / Image',
    render: () =>
        <WidgetMediaImage
            isEditable={ true }
        />
}

export const Text = {
    name: 'Media / Text',
    render: () => (
        <StoryWrapper>
            <WidgetMediaText
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Audio = {
    name: 'Media / Audio',
    render: () => (
        <StoryWrapper>
            <WidgetMediaAudio
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Video = {
    name: 'Media / Video',
    render: () => (
        <StoryWrapper>
            <WidgetMediaVideo
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Instagram = {
    name: 'Social Media / Instagram',
    render: () => (
        <StoryWrapper>
            <WidgetInstagram
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Soundcloud = {
    name: 'Social Media / Soundcloud',
    render: () => (
        <StoryWrapper>
            <WidgetSoundcloud
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Youtube = {
    name: 'Social Media / Youtube',
    render: () => (
        <StoryWrapper className='flex-column'>
            <div><WidgetYoutube
                isEditable={ true }
            /></div>
        </StoryWrapper>
    )
}

export const Vimeo = {
    name: 'Social Media / Vimeo',
    render: () => (
        <StoryWrapper>
            <WidgetVimeo
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Docs = {
    name: 'Google / Docs',
    render: () => <StoryWrapper>
        <WidgetGoogle
            data={{
                url: 'https://docs.google.com/document/d/1kRWn-fYwOgjh7g-i5zSw8MQ_U3LF0a3zpX7CpTWrK2w/edit?usp=sharing'
            }}
        />
    </StoryWrapper>
}

export const Slides = {
    name: 'Google / Slides',
    render: () => (
        <StoryWrapper>
            <WidgetGoogle
                data={{
                    url: 'https://docs.google.com/presentation/d/1Bu8UGPUgH_tHWGMrr_M-0kzNThW00dv7PaPKcVCsQgI/edit?usp=sharing'
                }}
            />
        </StoryWrapper>
    )
}

export const Sheets = {
    name: 'Google / Sheets',
    render: () => (
        <StoryWrapper>
            <WidgetGoogle
                data={{

                    url: 'https://docs.google.com/spreadsheets/d/1Vj0Xxv3_vFb9GxkjEZxtmwhLaIdK0N2nYU8ZbZu1U1s/edit?usp=sharing'
                }}
            />
        </StoryWrapper>
    )
}

export const Calendar = {
    name: 'Times / Calendar',
    render: () => (
        <StoryWrapper>
            <WidgetCalendar
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Clock = {
    name: 'Times / Clock',
    render: () => (
        <StoryWrapper>
            <WidgetClock
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const ClockWorldClock = {
    name: 'Times / Clock / World Clock',
    render: () => (
        <StoryWrapper>
            <WidgetWorldClock
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const Countdown = {
    name: 'Times / Countdown',
    render: () => (
        <StoryWrapper>
            <WidgetCountdown
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

export const News = {
    name: 'Misc / News',
    render: () => (
        <StoryWrapper>
            <WidgetNews
                isEditable={ true }
            />
        </StoryWrapper>
    )
}

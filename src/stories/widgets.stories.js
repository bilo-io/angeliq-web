import * as d3 from 'd3'
import React from 'react'
import { storiesOf } from '@storybook/react'
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

const galleryLink = 'https://github.com/d3/d3/wiki/Gallery'

// #region MEDIA

storiesOf('Widgets | Media / Image', module)
    .add('Default', () =>
        <WidgetMediaImage
            isEditable={ true }
        />
    )

storiesOf('Widgets | Media / Text', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetMediaText
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Media / Audio', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetMediaAudio
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Media / Video', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetMediaVideo
                isEditable={ true }
            />
        </StoryWrapper>
    ))

// #endregion

// #region SOCIAL

storiesOf('Widgets | Social Media / Instagram', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetInstagram
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Social Media / Soundcloud', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetSoundcloud
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Social Media / Youtube', module)
    .add('Default', () => (
        <StoryWrapper className='flex-column'>
            <div><WidgetYoutube
                isEditable={ true }
            /></div>
        </StoryWrapper>
    ))
    .add('Default', () => (
        <StoryWrapper className='flex-column'>
            <div><WidgetYoutube
                isEditable={ true }
            /></div>
        </StoryWrapper>
    ))

storiesOf('Widgets | Social Media / Vimeo', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetVimeo
                isEditable={ true }
            />
        </StoryWrapper>
    ))

// #endregion

// #region GOOGLE

storiesOf('Widgets | Google / Docs', module)
    .add('Default', () => <StoryWrapper>
        <WidgetGoogle
            data={{
                url: 'https://docs.google.com/document/d/1kRWn-fYwOgjh7g-i5zSw8MQ_U3LF0a3zpX7CpTWrK2w/edit?usp=sharing'
            }}
        />
    </StoryWrapper>
    )

storiesOf('Widgets | Google / Slides', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetGoogle
                data={{
                    url: 'https://docs.google.com/presentation/d/1Bu8UGPUgH_tHWGMrr_M-0kzNThW00dv7PaPKcVCsQgI/edit?usp=sharing'
                }}
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Google / Sheets', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetGoogle
                data={{

                    url: 'https://docs.google.com/spreadsheets/d/1Vj0Xxv3_vFb9GxkjEZxtmwhLaIdK0N2nYU8ZbZu1U1s/edit?usp=sharing'
                }}
            />
        </StoryWrapper>
    ))

// #endregion

// #region TIME

storiesOf('Widgets | Times / Calendar', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetCalendar
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Times / Clock', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetClock
                isEditable={ true }
            />
        </StoryWrapper>
    ))
    .add('World Clock', () => (
        <StoryWrapper>
            <WidgetWorldClock
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Times / Countdown', module)
    .add('Default', () => (
        <StoryWrapper>
            <WidgetCountdown
                isEditable={ true }
            />
        </StoryWrapper>
    ))

storiesOf('Widgets | Misc / News')
    .add('Default', () => (
        <StoryWrapper>
            <WidgetNews
                isEditable={ true }
            />
        </StoryWrapper>
    ))
// #endregion

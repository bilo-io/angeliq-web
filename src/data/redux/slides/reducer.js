import { setState, initState } from 'util/state'

export const FETCH_SLIDESHOWS = 'slides/FETCH_SLIDESHOWS'
export const SET_SLIDESHOW = 'slides/SET_SLIDESHOW'

export const FETCH_SCREENS = 'slides/FETCH_SCREENS'
export const SET_SCREEN = 'slides/SET_SCREEN'

export const FETCH_SCHEDULES = 'slides/FETCH_SCHEDULES'
export const SET_SCHEDULE = 'slides/SET_SCHEDULE'

const initialState = {
    slideshows: initState([]),
    slideshow: initState({}),
    screens: initState([]),
    screen: initState({}),
    schedules: initState([]),
    schedule: initState({})
}

const slides = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
    // SLIDESHOWS
    case FETCH_SLIDESHOWS:
        return {
            ...state,
            slideshows: payload
        }
    case SET_SLIDESHOW:
        return {
            ...state,
            slideshow: payload
        }
    // SCREENS
    case FETCH_SCREENS:
        return {
            ...state,
            screens: payload
        }
    case SET_SCREEN:
        return {
            ...state,
            screen: payload
        }

    // SCHEDULES
    case FETCH_SCHEDULES:
        return {
            ...state,
            slideshows: payload
        }
    case SET_SCHEDULE:
        return {
            ...state,
            screen: payload
        }
    default: return state
    }
}

export default slides

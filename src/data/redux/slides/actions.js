import ScheduleService from '../../../apps/slides/schedules/service'
import { GETResource, POSTResource } from '../utils'
import {
    // CORE
    FETCH_SLIDESHOWS,
    FETCH_SCREENS,
    FETCH_SCHEDULES,
    SET_SLIDESHOW,
    SET_SCREEN,
    SET_SCHEDULE
} from './reducer'

export const fetchSlideshows = (params = {}) => dispatch => {
    return GETResource({
        resourceName: 'slides/slideshows',
        actionType: FETCH_SLIDESHOWS
    }, params, dispatch)
}

export const setSlideshow = (data) => dispatch => {
    dispatch({
        payload: data,
        type: SET_SLIDESHOW
    })
}

export const fetchScreens = (params = {}) => dispatch => {
    return GETResource({
        resourceName: 'slides/screens',
        actionType: FETCH_SCREENS
    }, params, dispatch)
}

export const setScreen = (data) => dispatch => {
    dispatch({
        payload: data,
        type: SET_SCREEN
    })
}

export const fetchSchedules = (params = {}) => dispatch => {
    return GETResource({
        resourceName: 'slides/schedules',
        actionType: FETCH_SCHEDULES
    }, params, dispatch)
}

export const setSchedule = (data) => dispatch => {
    dispatch({
        payload: data,
        type: SET_SCHEDULE
    })
}

import { GETResource, POSTResource } from '../utils'
import {
    // CORE
    SET_VIDEO_MODAL,
    SET_CURRENT_TAB,
    ADD_TOAST,
    SET_USER,
    SET_USER_GROUP,
    SET_CURRENT_WORKSPACE
} from './reducer'

// CORE
export const setCurrentTab = (name) => dispatch => {
    dispatch({
        type: SET_CURRENT_TAB,
        payload: name
    })
}

export const setVideoModal = (isOpen) => dispatch => {
    dispatch({
        type: SET_VIDEO_MODAL,
        payload: isOpen
    })
}

export const addToast = (toast) => dispatch => {
    dispatch({
        type: ADD_TOAST,
        payload: toast
    })
}

export const setUser = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}

export const setUserGroup = (userGroup) => dispatch => {
    dispatch({
        type: SET_USER_GROUP,
        payload: userGroup
    })
}

export const setWorkspace = (workspace) => dispatch => {
    dispatch({
        type: SET_CURRENT_WORKSPACE,
        payload: workspace
    })
}

export const logOut = () => dispatch => {
    dispatch({
        type: SET_USER,
        payload: null
    })
}

import { setState, initState } from 'util/state'

export const SET_CURRENT_APP = 'session/SET_CURRENT_APP'
export const SET_CURRENT_TAB = 'session/SET_CURRENT_TAB'
export const SET_CURRENT_WORKSPACE = 'session/SET_CURRENT_WORKSPACE'

export const SET_WORKSPACES = 'session/SET_WORKSPACES'
export const SET_USER = 'session/SET_USER'
export const SET_USER_GROUP = 'session/SET_USER_GROUP'
export const ADD_TOAST = 'session/ADD_TOAST'
export const SET_VIDEO_MODAL = 'session/SET_VIDEO_MODAL'

const initialState = {
    // CORE
    currentTab: 'dashboard',
    currentUserGroup: initState({}),
    currentWorkspace: initState({}),
    currentUser: undefined,
    workspaces: initState({}),
    isVideoModalOpen: false,
    // APP
    apps: initState([]),
    toasts: initState([])
}

const session = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
    case ADD_TOAST:
        return {
            ...state,
            toasts: {
                ...state.toasts,
                payload
            },
            toast: payload
        }
    case SET_USER:
        // eslint-disable-next-line no-case-declarations
        return {
            ...state,
            currentUser: {
                ...payload
            }
        }
    case SET_USER_GROUP: return {
        ...state,
        currentUserGroup: payload
    }
    case SET_CURRENT_WORKSPACE: return {
        ...state,
        currentWorkspace: payload
    }
    case SET_VIDEO_MODAL: return {
        ...state,
        isVideoModalOpen: payload
    }
    default: return state
    }
}

export default session

import { setState, initState } from 'util/state'

export const FETCH_PROJECTS = 'stats/FETCH_PROJECTS'

const initialState = {
    projects: initState([])
}

const stats = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
    // PROJECTS
    case FETCH_PROJECTS:
        return {
            ...state,
            projects: payload
        }
    default: return state
    }
}

export default stats

import { setState, initState } from 'util/state'

export const FETCH_COURSES = 'schools/FETCH_COURSES'

const initialState = {
    courses: initState([])
}

const schools = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
    // COURSES
    case FETCH_COURSES:
        return {
            ...state,
            courses: payload
        }
    default: return state
    }
}

export default schools

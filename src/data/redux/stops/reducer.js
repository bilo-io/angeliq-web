export const FETCH_TOKEN = 'stops/FETCH_TOKEN'

const initialState = {
    token: undefined,
    start: undefined,
    end: undefined
}

const stops = (state = initialState, {
    type,
    payload
}) => {
    let response, result

    switch (type) {
    case FETCH_TOKEN:
        return {
            ...state,
            token: payload
        }
    default: return state
    }
}

export default stops

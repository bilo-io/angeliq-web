import axios from 'axios'

import { toUrlParams } from 'util/url'

const LIVESIGN_URL = 'http://localhost:3333'
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}
const handleResponse = (dispatch, type, response) => {
    dispatch({ type, payload: response })
}

export const RESTAction = ({ promise, actionType }, dispatch) => {
    promise
        .then(response => {
            console.log('RESTAction SUCCESS', response)
            handleResponse(dispatch, actionType, { data: response })
        })
        .catch(error => {
            console.log('RESTAction ERROR')
            handleResponse(dispatch, actionType, { error })
        })
    // return promise
}

export const GETResource = ({ resourceName, actionType }, params = {}, dispatch) => {
    const urlParams = toUrlParams(params)
    const urlId = params.id
    const url = `${LIVESIGN_URL}/${resourceName}${urlId ? `/${urlId}` : urlParams ? `?${urlParams}` : ''}`

    dispatch({ type: actionType, payload: { url } })
    const promise = axios({
        method: 'GET',
        url,
        headers
    })

    promise
        .then(response => {
            handleResponse(dispatch, actionType, { data: response.data })
        })
        .catch(error => {
            handleResponse(dispatch, actionType, { error })
        })
    return promise
}

export const POSTResource = ({ resourceName, actionType }, params = {}, dispatch) => {
    const urlParams = toUrlParams(params)
    const urlId = params.id
    const url = `${LIVESIGN_URL}/${resourceName}${urlId ? `/${urlId}` : urlParams ? `?${urlParams}` : ''}`

    dispatch({ type: actionType, payload: { url } })
    const promise = axios({
        method: 'POST',
        url,
        headers,
        data: params.body || {}
    })

    promise
        .then(response => {
            handleResponse(dispatch, actionType, { data: response.data })
        }).catch(error => {
            handleResponse(dispatch, actionType, { error })
        })
    return promise
}

export default {
    RESTAction,
    GETResource,
    POSTResource,
    handleResponse
}

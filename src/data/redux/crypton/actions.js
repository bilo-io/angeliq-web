// import ScheduleService from '../../../apps/slides/schedules/service'
import {
    RESTAction,
    GETResource,
    POSTResource
} from 'data/redux/utils'
import {
    // CORE
    FETCH_COINS,
    SET_COIN,
    // PORTFOLIO
    FETCH_ASSETS,
    FETCH_BOTS,
    FETCH_TRANSACTIONS
} from './reducer'

import {
    fetchCoins,
    fetchExchanges,
    fetchCryptoIndex,
    fetchChartData,
    fetchExchangeRates,
    fetchOHLC,
    fetchGlobal,
    fetchSearchTrending
} from 'util/apis/crypto'

// export const fetchCoins = ({ params }) => dispatch => {
//     return GETResource({
//         resourceName: 'crypton/coins',
//         actionType: FETCH_COINS
//     }, params, dispatch)
// }

export const setCoin = (data) => dispatch => {
    dispatch({
        payload: data,
        type: SET_COIN
    })
}

// Portfolio

export const fetchAssets = (data) => dispatch => {
    return GETResource({
        resourceName: 'crypton/assets',
        actionType: FETCH_ASSETS
    })
}
export const fetchBots = (data) => dispatch => {
    return GETResource({
        resourceName: 'crypton/assets',
        actionType: FETCH_BOTS
    })
}
export const fetchTransactions = (data) => dispatch => {
    return GETResource({
        resourceName: 'crypton/assets',
        actionType: FETCH_TRANSACTIONS
    })
}

// CryptoAPI

export const fetchCryptonCoins = () => dispatch => {
    RESTAction({
        promise: fetchCoins(),
        actionType: FETCH_COINS
    }, dispatch)
}

export const fetchCryptonGlobal = () => dispatch => {
    RESTAction({
        promise: fetchGlobal()
    })
}

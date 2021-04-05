import { setState, initState } from 'util/state'

export const FETCH_CHARTS = 'crypton/FETCH_CHARTS'
export const FETCH_COINS = 'crypton/FETCH_COINS'
export const SET_COIN = 'crypton/SET_COIN'
export const FETCH_ASSETS = 'crypton/FETCH_ASSETS'
export const FETCH_BOTS = 'crypton/FETCH_BOTS'
export const SET_CURRENCY = 'crypton/SET_CURRENCY'
export const FETCH_TRANSACTIONS = 'crypton/FETCH_TRANSACTIONS'

const initialState = {
    currency: 'usd',
    coins: initState([]),
    coin: initState({}),
    bots: initState([]),
    charts: initState({})
}

const crypton = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
    case FETCH_COINS:
        return {
            ...state,
            coins: {
                data: payload.data.sort((a, b) => a?.['market_data']?.['current_price']?.[state.currency] > b?.['market_data']?.['current_price']?.[state.currency]
                    ? -1
                    : a?.['market_data']?.['current_price']?.[state.currency] < b?.['market_data']?.['current_price']?.[state.currency]
                        ? 1
                        : 0)
            }
        }
    case SET_COIN:
        return {
            ...state,
            coin: payload
        }
    case SET_CURRENCY:
        return {
            ...state,
            currency: payload
        }
    case FETCH_ASSETS:
        return {

            ...state,
            assets: payload
        }
    case FETCH_BOTS:
        return {

            ...state,
            bots: payload
        }
    case FETCH_TRANSACTIONS:
        return {

            ...state,
            transactions: payload
        }
    default: return state
    }
}

export default crypton

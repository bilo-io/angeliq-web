// https://rapidapi.com/coingecko/api/coingecko?endpoint=apiendpoint_f5907cad-a58b-4538-af58-11d07231975c
import { GET } from './core'

const apiRoot = 'https://api.coingecko.com/api/v3'

export const fetchGlobal = async () => {
    const url = `${apiRoot}/global`
    return await GET(url)
}

export const fetchSearchTrending = async () => {
    const url = `${apiRoot}/search/trending`
    return await GET(url)
}

export const fetchExchangeRates = async () => {
    const url = `${apiRoot}/exchange_rates`
    return await GET(url)
}

export const fetchCryptoIndex = async (id = '') => {
    const url = `${apiRoot}/coins${id?.length > 0 ? `/${id}` : ''}`
    return await GET(url)
}

export const fetchExchanges = async (id = '') => {
    const url = `${apiRoot}/exchanges${id?.length > 0 ? `/${id}` : ''}`
    return await GET(url)
}

export const fetchChartData = async ({ id, currency, days }) => {
    const url = `${apiRoot}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    return await GET(url)
}

export const fetchHistory = async (id = 'bitcoin') => {
    const url = `${apiRoot}/coins/${id}/history?date=${'01-01-2020'}`
    return await GET(url)
}

export const fetchCoins = async (id = '') => {
    const url = `${apiRoot}/coins${id?.length > 0 ? `/${id}` : ''}`
    return await GET(url)
}

export const fetchCoinsList = async () => {
    const url = `${apiRoot}/coins/list`
    return await GET(url)
}

export const fetchCoinsMarket = async () => {
    const url = `${apiRoot}/coins/market`
    return await GET(url)
}

export const fetchOHLC = async (id = 'bitcoin') => {
    const url = `${apiRoot}/coins/${id}/ohlc`
    return await GET(url)
}

console.log(fetchHistory('bitcoin'))

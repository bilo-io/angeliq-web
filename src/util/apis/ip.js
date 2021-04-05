import { GET } from './core'

export const fetchIPAddress = async () => {
    const url = 'https://api.ipify.org/?format=json'
    return await GET(url)
}

export const fetchCountryForIP = async (ip) => {
    const url = `https://api.ip2country.info/ip?${ip}`
    return await GET(url)
}

export default {
    fetchIPAddress,
    fetchCountryForIP
}

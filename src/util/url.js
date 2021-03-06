export const toUrlParams = (obj) => {
    const keys = Object.keys(obj)
    return keys.map((key, i) => `${key}=${obj[key]}`).join('&')
}

export const fromUrlParams = (query) => {
    if (query.length === 0) {
        return {}
    }
    const obj = {}
    const queryArray = (query[0] === '?' ? query.slice(1, query.length) : query).split('&')

    queryArray.forEach(item => {
        const keyValue = item.split('=')
        obj[keyValue[0]] = keyValue[1]
    })
    return obj
}

export const getUrlId = (url) => {
    const path = url.split('/')
    return path[path.length - 1]
}

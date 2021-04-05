// LOCAL_STORAGE
export const setLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    return { [key]: value }
}
export const getLocal = (key) => {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
}
export const local = {
    set: setLocal,
    get: getLocal
}

export const storage = {
    local
}

export default storage

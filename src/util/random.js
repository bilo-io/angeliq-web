const alphaNumeric = (length) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

export default {
    alphaNumeric
}

export const bytesToString = (bytes) => {
    var i = -1
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB']
    do {
        bytes = bytes / 1024
        i++
    } while (bytes > 1024)

    return Math.max(bytes, 0.1).toFixed(1) + byteUnits[i]
}

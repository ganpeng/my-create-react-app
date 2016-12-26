

export function cutStr(str, len) {
    const strLen = str.length
    if (strLen > len) {
        return str.substring(0, len) + '...'
    } else {
        return str
    }
}
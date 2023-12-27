export function padZero(str: text, len = 2): text {
    return (new Array(len).join('0') + str).slice(-len)
}

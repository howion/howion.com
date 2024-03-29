import { padZero } from './text.util'

export function invertColor(hex: text): text {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1)
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.')
    }

    // invert color components
    const R = (255 - parseInt(hex.slice(0, 2), 16)).toString(16)
    const G = (255 - parseInt(hex.slice(2, 4), 16)).toString(16)
    const B = (255 - parseInt(hex.slice(4, 6), 16)).toString(16)

    // pad each with zeros and return
    return '#' + padZero(R) + padZero(G) + padZero(B)
}

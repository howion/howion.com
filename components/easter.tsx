// import html2canvas from 'html2canvas'
import React, { useRef, useState } from 'react'
import { useDidMount } from 'rooks'

// @ts-ignore type module is broken
import cheet from 'cheet.js'
import { ClientUtil } from '/utils/client.util'

const CHEETS = {
    exit: 'esc'.split('').join(' ')
} as const

export default function Easter(): FCReturn {
    const [isActive, setIsActive] = useState(false)
    const [didMount, setDidMount] = useState(false)
    const easterRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState<keyof typeof CHEETS | ''>('')

    useDidMount(() => {
        // REGISTER CHEATS
        // cheet(CHEETS.konami)
        cheet(CHEETS.exit)

        cheet.done((seq: text) => {
            if (seq === CHEETS.exit) {
                setContent('')
                setDidMount(false)
                ClientUtil.showBodyScroll()
                return setIsActive(false)
            }

            // if (seq === CHEETS.konami) {
            //     setContent('konami')
            //     return setIsActive(true)
            // }
        })
    })

    if (isActive && !didMount) {
        ClientUtil.hideBodyScroll()
        setDidMount(true)
    }

    if (!isActive && didMount) {
        ClientUtil.showBodyScroll()
        setDidMount(false)
        setContent('')
    }

    return (
        <div ref={easterRef} className={'ma-easter-container' + (didMount ? ' enabled' : '')}>
            <div className="m-easter-transitor" />
            <div className="m-easter-content">{didMount ? <></> : undefined}</div>
        </div>
    )
}

import React, { useRef } from 'react'
import { useDidMount } from 'rooks'
import { Terminal as XTerminal } from 'xterm'
import { WebLinksAddon } from 'xterm-addon-web-links'
import { FitAddon } from 'xterm-addon-fit'

import 'xterm/css/xterm.css'

/* dynamic */
export default function Terminal(): FCReturn {
    const terminalRef = useRef<HTMLDivElement>(null)
    const didLoad = useRef<boolean>(false)

    useDidMount(async () => {
        if (!terminalRef.current || didLoad.current) return
        didLoad.current = true

        const _xterminal = new XTerminal({
            // allowProposedApi
            allowTransparency: true,
            altClickMovesCursor: true,
            convertEol: false,
            cursorBlink: true,
            cursorStyle: 'bar',
            cursorWidth: 8,
            customGlyphs: true,
            disableStdin: false,
            drawBoldTextInBrightColors: true,
            fastScrollModifier: 'shift',
            // fastScrollSensitivity:
            fontSize: 16,
            // fontFamily
            // fontWeight
            // fontWeightBold
            // letterSpacing
            // lineHeight

            // macOptionIsMeta
            // macOptionClickForcesSelection

            // minimumContrastRatio
            rightClickSelectsWord: true,
            screenReaderMode: false,
            // scrollback
            scrollOnUserInput: true,
            // scrollSensitivity
            smoothScrollDuration: 0
            // tabStopWidth,
            // theme

            // windowsMode
            // wordSeparator
            // windowOptions
            // overviewRulerWidth: 10
        })

        const webLinksAddon = new WebLinksAddon()
        const fitAddon = new FitAddon()

        _xterminal.loadAddon(webLinksAddon)
        _xterminal.loadAddon(fitAddon)

        _xterminal.open(terminalRef.current)

        fitAddon.fit()
        window.addEventListener('resize', () => fitAddon.fit())

        // _xterminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $')
    })

    return <div ref={terminalRef} className="m-terminal" />
}

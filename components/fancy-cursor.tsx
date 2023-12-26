import React, { useCallback, useRef, useState } from 'react'
import c from 'classnames'
import { useDidMount } from 'rooks'

export interface FancyCursorPosition {
    x: number
    y: number
}

export interface FancyCursorProps {
    className?: text
}

export type FancyCursorStatus = 'default' | 'hidden' | 'pointer' | 'disabled'

export const FANCY_CURSOR_SPEED_OUTER = 0.075
export const FANCY_CURSOR_SPEED_INNER = 0.15

export const LERP = (a: number, b: number, n: number): number => (1 - n) * a + n * b

// todo: use a provider instead and follow from there to outer and inner cursors

export function FancyCursor(props: FancyCursorProps): FCReturn<FancyCursorProps> {
    const { className } = props

    const didMount = useRef(false)
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const raf = useRef<number | null>(null)
    const elementPosition = useRef<FancyCursorPosition>({ x: 0, y: 0 })
    const cursorPosition = useRef<FancyCursorPosition>({ x: 0, y: 0 })

    const [status, setStatus] = useState<FancyCursorStatus>('hidden')

    const animate = useCallback(() => {
        const { x: cx, y: cy } = cursorPosition.current

        const ex = Number.parseInt(outerRef.current!.style.left) || 0
        const ey = Number.parseInt(outerRef.current!.style.top) || 0

        const nx = LERP(ex, cx, FANCY_CURSOR_SPEED_OUTER)
        const ny = LERP(ey, cy, FANCY_CURSOR_SPEED_OUTER)

        const delta = Math.sqrt(Math.pow(cx - ex, 2) + Math.pow(cy - ey, 2))

        if (delta < 0.001) {
            cancelAnimationFrame(raf.current!)
            raf.current = null
            return
        }

        outerRef.current!.style.top = `${ny}px`
        outerRef.current!.style.left = `${nx}px`

        const e2x = Number.parseInt(innerRef.current!.style.left) || 0
        const e2y = Number.parseInt(innerRef.current!.style.top) || 0

        const n2x = LERP(e2x, cx, FANCY_CURSOR_SPEED_INNER) - 1
        const n2y = LERP(e2y, cy, FANCY_CURSOR_SPEED_INNER) - 1

        innerRef.current!.style.top = `${n2y}px`
        innerRef.current!.style.left = `${n2x}px`

        raf.current = requestAnimationFrame(animate)
    }, [])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        cursorPosition.current.x = e.clientX // window.innerWidth
        cursorPosition.current.y = e.clientY // window.innerHeight
        if (!raf.current) raf.current = requestAnimationFrame(animate)
    }, [animate])

    // const handleMouseViewportIn = useCallback((e) => {
    //     setStatus('default')
    // }, [])

    const handleMouseViewportOut = useCallback((e) => {
        setStatus('hidden')
    }, [])

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const path = e.composedPath && e.composedPath()
        path.reverse()

        let cursor = 'default'

        for (const node of path) {
            if (!('hasAttribute' in node)) continue
            const dataCursor = (node as any).getAttribute('data-cursor')
            if (dataCursor) cursor = dataCursor
        }

        setStatus(cursor as FancyCursorStatus)
    }, [])

    useDidMount(() => {
        if (didMount.current) return
        didMount.current = true

        window.document.addEventListener('mousemove', handleMouseMove)
        // window.document.addEventListener('mouseenter', handleMouseViewportIn)
        window.document.addEventListener('mouseover', handleMouseOver)
        window.document.addEventListener('mouseleave', handleMouseViewportOut)
    })

    return (
        <>
            <div ref={outerRef} className={c('fancy-cursor-outer', className, 'cursor-' + status)} />
            <div ref={innerRef} className="fancy-cursor-inner" />
        </>
    )
}

import React, { useCallback, useEffect, useRef, useState } from 'react'
import c from 'classnames'
import { useDidMount } from 'rooks'

export interface FancyCursorPosition {
    x: number
    y: number
}

export interface FancyCursorProps {
    className?: text
}

export type FancyCursorStatus = 'default' | 'hidden' | 'pointer' | 'disabled' | text

export const FANCY_CURSOR_SPEED_OUTER = 0.1
export const FANCY_CURSOR_SPEED_INNER = 0.5

export const LERP = (a: number, b: number, n: number): number => (1 - n) * a + n * b

// todo: use a provider instead and follow from there to outer and inner cursors

export function FancyCursor(props: FancyCursorProps): FCReturn<FancyCursorProps> {
    const { className } = props

    const didMount = useRef(false)
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    const raf = useRef<number | null>(null)
    const cursorPosition = useRef<FancyCursorPosition>({ x: 0, y: 0 })

    const [status, setStatus] = useState<FancyCursorStatus>('hidden')

    const animate = useCallback(() => {
        const { x: cx, y: cy } = cursorPosition.current

        const ex = Number.parseInt(outerRef.current!.style.left) || 0
        const ey = Number.parseInt(outerRef.current!.style.top) || 0

        const nx = LERP(ex, cx, FANCY_CURSOR_SPEED_OUTER)
        const ny = LERP(ey, cy, FANCY_CURSOR_SPEED_OUTER)

        // const delta = Math.sqrt(Math.pow(cx - ex, 2) + Math.pow(cy - ey, 2))

        // if (delta < 0.001) {
        //     cancelAnimationFrame(raf.current!)
        //     raf.current = null
        //     return
        // }

        outerRef.current!.style.top = `${ny}px`
        outerRef.current!.style.left = `${nx}px`

        const e2x = Number.parseInt(innerRef.current!.style.left) || 0
        const e2y = Number.parseInt(innerRef.current!.style.top) || 0

        const n2x = LERP(e2x, cx, FANCY_CURSOR_SPEED_INNER)
        const n2y = LERP(e2y, cy, FANCY_CURSOR_SPEED_INNER)

        innerRef.current!.style.top = `${n2y}px`
        innerRef.current!.style.left = `${n2x}px`

        raf.current = requestAnimationFrame(animate)
    }, [])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        cursorPosition.current.x = e.clientX // window.innerWidth
        cursorPosition.current.y = e.clientY // window.innerHeight
    }, [])

    const handleMouseViewportOut = useCallback(() => setStatus('hidden'), [])

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const path = e.composedPath && e.composedPath() as HTMLElement[]
        path.reverse()

        let cursor = 'default'

        for (const node of path) {
            if (!('hasAttribute' in node)) continue
            const dataCursor = (node as any).getAttribute('data-cursor')

            if (dataCursor) {
                cursor = dataCursor
                continue
            }

            if (node.tagName === 'A') {
                cursor = 'pointer'
                continue
            }
        }

        setStatus(cursor)
    }, [])

    useEffect(() => {
        if (status === 'disabled') {
            window.document.body.classList.remove('is-cursor-enabled')
        } else {
            window.document.body.classList.add('is-cursor-enabled')
        }
    }, [status])

    useDidMount(() => {
        if (didMount.current) return
        didMount.current = true

        window.document.addEventListener('mousemove', handleMouseMove)
        window.document.addEventListener('mouseover', handleMouseOver)
        window.document.addEventListener('mouseleave', handleMouseViewportOut)
        if(!raf.current) raf.current = requestAnimationFrame(animate)
    })

    return (
        <>
            <div className={c('fancy-cursor-container', className, 'cursor-' + status)}>
                <div ref={outerRef} className="fancy-cursor-outer" />
                <div ref={innerRef} className="fancy-cursor-inner" />
            </div>
        </>
    )
}

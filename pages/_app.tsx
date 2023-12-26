import type { AppProps } from 'next/app'

import { useRef } from 'react'
import { useDidMount } from 'rooks'
import { Inter } from 'next/font/google'
import Lenis from '@studio-freight/lenis'

import { Meta } from '/components/meta'
import { FancyCursor } from '/components/fancy-cursor'

import '/public/font/neue_montreal/stylesheet.css'
import '/scss/_index.scss'

export const inter = Inter({
    weight: 'variable',
    preload: true,
    display: 'swap',
    adjustFontFallback: true,
    subsets: ['latin', 'latin-ext']
})

/* TODO:
 * smooth scroll
 * text effects
 * better 404 page
 * custom pointers
 */

export default function App({ Component, pageProps, router }: FCProps<AppProps>): FCReturn<AppProps> {
    let route = router.route.split('/')[1].trim() ?? ''
    if (!route) route = 'home'
    const appRef = useRef<HTMLDivElement>(null)
    const isAppMounted = useRef(false)

    useDidMount(() => {
        if (isAppMounted.current) return
        isAppMounted.current = true

        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // const splash = window.document.getElementById('ma-splash')

        // if (splash) {
        //     splash.classList.add('hidden')
        //     if (route === 'map') splash.style.display = 'none'
        // }

        // setTimeout(
        //     () => {
        //         window.document.body.style.overflow = 'overlay'
        //     },
        //     splash ? 2750 : 0
        // )
    })

    return (
        <>
            <Meta __setViewport />

            <FancyCursor />

            <div id="app" ref={appRef} className={inter.className}>
                <div className="m-noise" />
                <div className="m-desktoponly">This website is available for desktops ({'>='} 1920px) only.</div>
                {/*<FancyCursorProvider>
                        <FancyCursor className="app-cursor-inner"/>
                        <FancyCursor className="app-cursor-outer"/>
                    </FancyCursorProvider>*/}

                {/* <Splash /> */}
                {/* <Modal /> */}

                <main id={'app-main-' + route}>
                    {/* <Navbar /> */}
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    )
}

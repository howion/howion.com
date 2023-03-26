import type { AppProps } from 'next/app'
// import dynamic from 'next/dynamic'
import { useDidMount } from 'rooks'
import { Meta } from '/components/meta'
// import { Transitor } from '/components/transitor'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Navbar } from '/components/navbar'
import { useRef } from 'react'

// const Easter = dynamic(() => import('/components/easter'), {
// ssr: false
// })

// SCSS
// import 'locomotive-scroll/dist/locomotive-scroll.css'
import { Inter } from 'next/font/google'
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

    useDidMount(() => {
        // import('locomotive-scroll').then((LocomotiveScroll) => {
        //     new LocomotiveScroll.default({
        //         el: document.getElementById('app')!,
        //         smooth: true
        //     })
        // })

        const splash = window.document.getElementById('ma-splash')

        if (splash) {
            splash.classList.add('hidden')
            if (route === 'map') splash.style.display = 'none'
        }

        setTimeout(
            () => {
                window.document.body.style.overflow = 'overlay'
            },
            splash ? 2750 : 0
        )
    })

    return (
        <>
            <Meta __setViewport />
            {/* <Easter /> */}
            {/* <Transitor /> */}
            {/* <LocomotiveScrollProvider
                options={{
                    smooth: true
                }}
                watch={[router.asPath]}
                onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
                containerRef={appRef}
            > */}
            <div id="app" ref={appRef} className={inter.className}>
                <div className="m-noise" />
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
            {/* </LocomotiveScrollProvider> */}
        </>
    )
}

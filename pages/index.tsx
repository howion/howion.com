import React, { useRef } from 'react'
import { Meta } from '/components/meta'
import dynamic from 'next/dynamic'
import { useDidMount } from 'rooks'
import Draggable from 'react-draggable'

import { TransitorService } from '/services/transitor.service'
import { SpotifyCP } from '/components/spotifycp'
import { Socials } from '/components/socials'
import { Navbar } from '/components/navbar'
import { Footer } from '/components/footer'

const HomeCanvas = dynamic(() => import('/components/home-canvas'), {
    ssr: false
})

export default function Home(): FCReturn {
    const canvasWrapperRef = useRef<HTMLDivElement>(null)

    useDidMount(async () => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta />
            <Navbar />
            <header className="m-home-header" ref={canvasWrapperRef}>
                <HomeCanvas />
                <div className="m-container m-max-xl">
                    {/* <canvas ref={canvasRef} /> */}
                    <h1 className="m-home-header-title">
                        Ah you think <em>internet</em> {'//#>'} is your ally? You merely adopted the <em>internet</em>{' '}
                        ~~I was born in it, molded by it.
                    </h1>
                    <SpotifyCP />
                </div>
                <Draggable handle=".m-window-head">
                    <div className="m-home-header-window m-window-container">
                        <div className="m-window-head">
                            <div className="m-window-head-lhs">
                                <span>README.md</span>
                            </div>
                            <div className="m-window-head-rhs">
                                <i className="material-icons">close</i>
                            </div>
                        </div>
                        <div className="m-window-content"></div>
                    </div>
                </Draggable>
            </header>
            <Socials />
            <Footer />
        </>
    )
}

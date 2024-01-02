/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { Meta } from '/components/meta'
import { useDidMount } from 'rooks'
import Draggable from 'react-draggable'
import dynamic from 'next/dynamic'

import { TransitorService } from '/services/transitor.service'
import { SpotifyCP } from '/components/spotifycp'
import { Socials } from '/components/socials'
import { Navbar } from '/components/navbar'
import { Footer } from '/components/footer'
import { Loader } from '/components/loader'
import { Emblem } from '/components/emblem'

const HomeCanvas = dynamic(() => import('/components/home-canvas'), {
    ssr: false
})

export interface ArtworkProps {
    no: number
}

export function Artwork({ no }: ArtworkProps): FCReturn<ArtworkProps> {
    return (
        <div className="m-artwork-wrapper">
            <div className="m-artwork-canvas">
                <img
                    src={`/img/artwork/no${no}.svg`}
                    alt=""
                />
            </div>
            <div className="m-artwork-name">No. {no}</div>
        </div>
    )
}

const ARTWORKS = [1, 2, 3, 4, 5, 6]

export default function Home(): FCReturn {
    const canvasWrapperRef = useRef<HTMLDivElement>(null)
    const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null)

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
                        <div className="m-window-head" data-cursor="disabled">
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

            {process?.env.NODE_ENV === 'development' ? null : <Loader /> }

            <i className="material-icons m-home-portal-button">lightbulb</i>

            {/* <div className="m-home-portal" style={{
                marginLeft: pointerRef.x - 150,
                marginTop: pointerRef.y - 150
            }}>
            </div> */}

            <Socials />

            <section>
                <div className="m-home-section m-container m-max-lx">
                    <h2 className="m-home-section-title">
                        <span className="m-home-section-title-title">Selected Artwork,</span>
                        <span className="m-home-section-title-sub">Sans Titre</span>
                    </h2>
                </div>

                <div className="m-artwork-container is-mt-120">
                    {ARTWORKS.map((no) => (
                        <Artwork
                            key={no}
                            no={no}
                        />
                    ))}
                </div>
            </section>

            <section className="m-container m-max-lx is-mt-120">
                <div className="m-home-card">
                    <Emblem className="m-home-card-emblem" />
                    <span className="m-home-card-top-lhs">
                        {/* <span>me@howion.com</span> */}
                        {/* <span>+90 534 634 0134</span> */}
                        <span>me(a)howion.com</span>
                        {/* <span>/howion</span> */}
                    </span>
                    <div className="m-home-card-top-rhs">
                        <span>+90 534 634 01 34</span>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

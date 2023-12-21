import React, { useRef } from 'react'
import { Meta } from '/components/meta'
import dynamic from 'next/dynamic'
import { useDidMount } from 'rooks'
import Link from 'next/link'

import { TransitorService } from '/services/transitor.service'
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
                        Projects.
                    </h1>
                </div>
            </header>

            <section className="m-collection-section m-container m-max-lx">
                <Link target="_blank" href="https://anatolia19.com/" className="m-collection-item">
                   Anatolia: 19th Century<i className="m-collection-item-icon material-icons">open_in_new</i>
                </Link>
                <Link target="_blank" href="https://mathematica.howion.com/" className="m-collection-item">
                    Mathematica Par Excellence<i className="m-collection-item-icon material-icons">open_in_new</i>
                </Link>
                <Link target="_blank" href="https://speculo.howion.com/" className="m-collection-item">
                    Speculo<i className="m-collection-item-icon material-icons">open_in_new</i>
                </Link>
                <Link target="_blank" href="https://github.com/howion/lambert-w-function" className="m-collection-item">
                    lambert-w-function<i className="m-collection-item-icon material-icons">open_in_new</i>
                </Link>
                <Link target="_blank" href="http://demoapp.methodor.com/" className="m-collection-item">
                    Methodor<i className="m-collection-item-icon material-icons">open_in_new</i>
                </Link>

                {/* <Link href="/poems/ankara" className="m-collection-item">Ankara</Link> */}
            </section>

            <Footer />
        </>
    )
}

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
                        Poems.
                    </h1>
                </div>
            </header>

            <section className="m-collection-section m-container m-max-lx">
                <Link href="/poems/salve-salve-parve" className="m-collection-item">Salve, salve. Parve!</Link>
                <Link href="/poems/sans-titre" className="m-collection-item">Sans Titre</Link>
            </section>

            <Footer />
        </>
    )
}

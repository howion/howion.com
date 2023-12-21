import React, { useRef } from 'react'
import { Meta } from '/components/meta'
import { useDidMount } from 'rooks'

import { TransitorService } from '/services/transitor.service'
import { Navbar } from '/components/navbar'
import { Footer } from '/components/footer'

const POEM =
`
Weep, I shall weep for you once more.
Adore, will you ever once mi amore?


The godly creature, your existence is an atrocity,
Yet, thou so keen on your imperative ferocity.


I can hear you once again.
Oh, will I ever listen to you again?
Shivering with your frequency,
Undulate towards you, I will.


More than a twist in my solitude,
Less than an unravel in your attitude.


You know only how,
Shall I weep for you once again?
`

export default function Home(): FCReturn {
    useDidMount(async () => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta />
            <Navbar />

            <section className="m-item m-container m-max-lx">
                <h1 className="m-item-title">Sans Titre</h1>
                <pre className="m-item-para">{POEM}</pre>
            </section>

            <Footer />
        </>
    )
}

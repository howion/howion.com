import React from 'react'
import { Meta } from '/components/meta'
import { useDidMount } from 'rooks'

import { TransitorService } from '/services/transitor.service'
import { Navbar } from '/components/navbar'
import { Footer } from '/components/footer'

const POEM =
`
Oh wheel of fortune, you have captured me again.
My dear, will this vicious cycle ever release me from this rein of agony?
Will my gaze ever reach out to your reality?
Oh my dear, haven't your glamorous glance been a tremble for me?


Virtue and sole chaos that has enslaved my soul.
Will fate ever liberate this fool infant?
You, who saves that are to be saved,
Will I ever be free in your dreams, or be left to perish?


Hereby, I bring my bare back to your mutiny.
Please, be noble in your cruelty,
Because I forswear in my uncertainty.
Will you bless me again with your voice?


Shadowed under your existence,
Will fate shed lights or tears on my persistance?
Oh my dear, my devoted spirit is so tender and precise,
Would you ever embrace this child into your paradise?


Tis was one time where this innocent boy asked to the mountain how to climb to its irressitable pinnacle.
The mountain answered: "There is a way, and it takes a gentlemens uttermost dedication, yet still unpredictable."
Then the boy asked with a swallow: "What does my soul worth?"
Oh my dear, does this kid have any idea?


Bent to your sole will, he is,
Is there no one to help him, save him?
Young fool must have thought he was the one,
Was he?


Was he?
Was he the one to mistook his self-worth?
Or, was he the one to accompany afterbirth?
Would you curse or bestow him with the truth?


Only with you I have the joie de vivre,
Without you its all a blither,
What would you whisper to this perceiver?
Would these delicate eyes ever notice me?


I can hear you once again.
Oh, will I ever listen to you again?
Shivering with your frequency,
Undulate towards you, I will.


Let me go gentle into that good night,
I will not go gentle into that good night,
Let me go gentle into that good night,
I will not go gentle into that good night...
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
                <h1 className="m-item-title">Salve, Salve. Parve!</h1>
                <pre className="m-item-para">{POEM}</pre>
            </section>

            <Footer />
        </>
    )
}

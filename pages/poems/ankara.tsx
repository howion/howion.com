import React from 'react'
import { Meta } from '/components/meta'
import { useDidMount } from 'rooks'

import { TransitorService } from '/services/transitor.service'
import { Navbar } from '/components/navbar'
import { Footer } from '/components/footer'

const POEM =
`
Gecenin kuru, soğuk ve sonsuz karanlığı yine üzerime geliyor,
Ölüm yorgunu nefeslerimi veriyorum
Sakince ağlamak istiyorum
Ve bu olanlardan inanın kızgın bir keyif alıyorum
Yerin dibine batmış olmaktan
Hareket ettikçe daha da alçalmaktan
Korkuyorum ama istiyorum,
Daha derin olsun
Daha soğuk olsun

Kısık bir takım feryat çığlıkları
Peşimi bırakmıyor
Nereye gidersem, nereye dönersem
Acınası hayatımdaki tek eğlence bu oldu

Bedenim özellikle aklım benimle oyun oynuyor
Küçük bir umut ve sonrasında tekrar sonsuz ızdırap
Kendisiyle gurur duyuyor, duyulmasını istiyor
Ruhum ise tüm bu olanları kınıyor
Kim bu ruhu ve bedeni dizginleyecek

Sen acınası hayat,
Gençliğimin enerji kaynağı ve hırsızı
Tümüyle reddediyorum bu anlaşmayı
Ama bunu yapacak gücü bile esirgiyorsun benden

Günler daralıyor,
Yollar birleşiyor
Ne kadar çabalasam boşuna
Ne kadar okusam boşuna

Hayat sahnesinde elime sıkıştırılan bu rol
Canımı sıkıyor,
Nefesim tekrar kesiliyor,
Umuyorum ki bu sonuncusu olacak...
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
                <h1 className="m-item-title">Ankara</h1>
                <pre className="m-item-para">{POEM}</pre>
            </section>

            <Footer />
        </>
    )
}

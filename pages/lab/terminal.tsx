import React from 'react'
import dynamic from 'next/dynamic'
import { Meta } from '/components/meta'
import { useDidMount } from 'rooks'
import { TransitorService } from '/services/transitor.service'

const Terminal = dynamic(() => import('/components/terminal'), {
    ssr: false
})

export default function PTerminal(): FCReturn {
    useDidMount(() => {
        TransitorService.hideTransitor()
    })

    return (
        <>
            <Meta title="Terminal" />
            <div className="ma-pterminal">
                <Terminal />
            </div>
        </>
    )
}

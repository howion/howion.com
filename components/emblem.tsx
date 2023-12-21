import React from 'react'
import c from 'classnames'

export interface EmblemProps {
    className?: text
}

export function Emblem(props: EmblemProps): FCReturn<EmblemProps> {
    const { className } = props

    return (
        <div className={c('m-emblem', className)}>
            OMER_MERT_
            <br />
            COSKUN
            <br />
            <span>HOWION</span>
        </div>
    )
}

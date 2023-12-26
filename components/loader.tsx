import React, { useState } from 'react'
import { useDidMount } from 'rooks'
import c from 'classnames'

export function Loader(): FCReturn {
    const [didLoad, setDidLoad] = useState(false)

    useDidMount(() => {
        setTimeout(() => {
            setDidLoad(true)
        }, 6 * 1000)
    })

    return (
        <div className={c('m-loader-container', {
            'is-loaded': didLoad
        })}>
            <div className="m-loader-moon">
                <div className="m-loader-moon-inside"></div>
            </div>
            <div className="m-loader-code-container">
                {/* <p className="m-loader-code">
                    {CODE}
                </p> */}
            </div>
        </div>
    )
}

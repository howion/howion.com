import React, { ReactElement } from 'react'
import { useDidMount } from 'rooks'
// import { NavbarService } from '/services/navbar.service'
// import { SplashService } from '/services/splash.service'
// import { _404Navbar } from '/constants/navbars/404.navbar'
import { Meta } from '/components/meta'

export default function _404(): ReactElement {
    useDidMount(() => {
        // NavbarService.update(_404Navbar())
        // SplashService.hideSplash(0)
    })

    return (
        <>
            <Meta title="404" noindex={true} />
        </>
    )
}

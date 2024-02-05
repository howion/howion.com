import React from 'react'
import Link from 'next/link'
import c from 'classnames'

import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'
import { inter } from '/pages/_app'

export function Navbar(props: HasClass): FCReturn {
    return (
        <>
            {/* <div className="m-nav-banner">
                <div className="m-nav-banner-container m-container m-max-lx">
                    <span className="m-nav-banner-text">
                        Psst. This website is also available on the Tor Network via{' '}
                        <a href="#">zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion</a>
                    </span>
                </div>
            </div> */}
            <nav className={c('m-nav is-scroll', inter.className, props.className)}>
                <div className="m-nav-container m-container m-max-lx">
                    <Anchor href="/" animate>
                        <Emblem />
                    </Anchor>
                    <ul className="m-nav-ul">
                        <li className="m-nav-li">
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li className="m-nav-li">
                            <Link href="/poems">
                                POEMS <sup>01</sup>
                            </Link>
                        </li>
                        <li className="m-nav-li">
                            <Link href="/projects">
                                PROJECTS <sup>05</sup>
                            </Link>
                        </li>
                        {/* <li className="m-nav-li">RESUME</li> */}
                        <li className="m-nav-li">
                            {/* PGP {'<---'}
                            <br />
                            CONTACT
                            <br />
                            {'---->'} ME */}
                            CONTACT <sup>PGP</sup>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

import React from 'react'
import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'

export function Navbar(props: HasClass): FCReturn {
    return (
        <>
            <div className="m-nav-banner">
                <div className="m-nav-banner-container m-container m-max-lx">
                    <span className="m-nav-banner-text">
                        Psst. This website is also available on the Tor Network via{' '}
                        <a href="#">zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion</a>
                    </span>
                    {/* <i className="m-nav-banner-close material-icons">close</i> */}
                </div>
            </div>
            <nav className={'m-nav is-scroll'}>
                <div className="m-nav-container m-container m-max-lx">
                    <Anchor href="/" animate>
                        <Emblem />
                    </Anchor>
                    <ul className="m-nav-ul">
                        <li className="m-nav-li">HOME</li>
                        <li className="m-nav-li">
                            PROJECTS <sup>07</sup>
                        </li>
                        <li className="m-nav-li">RESUME</li>
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

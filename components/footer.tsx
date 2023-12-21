import React from 'react'
import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'
import Link from 'next/link'

export function Footer(): FCReturn {
    return (
        <footer className="m-footer ">
            <div className="m-footer-container m-container m-max-lx">
                <Anchor href="/" animate>
                    <Emblem />
                </Anchor>
                <div className="m-footer-sections">
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">Website</span>
                        <ul className="m-footer-ul">
                            <li className="m-footer-li"><Link href="/">Home</Link></li>
                            <li className="m-footer-li"><Link href="/poems">Poems</Link></li>
                            <li className="m-footer-li">
                                <Link href="https://github.com/howion/howion.com">Source</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">HowionLab</span>
                        <ul className="m-footer-ul">
                            {/* <li className="m-footer-li">Terminal</li> */}
                            <li className="m-footer-li"><Link href="https://speculo.howion.com">Speculo</Link></li>
                        </ul>
                    </div>
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">TECH STACK</span>
                        <ul className="m-footer-ul">
                            <li className="m-footer-li">
                                <Link href="https://nextjs.org/">NextJS 13 (TS + SASS)</Link>
                            </li>
                            <li className="m-footer-li">
                                <Link href="https://vercel.com/">Vercel</Link>
                            </li>
                            <li className="m-footer-li">
                                <Link href="https://www.figma.com/">Figma</Link>
                            </li>
                            <li className="m-footer-li">
                                <Link href="https://simpleicons.org/">Simple Icons</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">Miscellaneous</span>
                        <ul className="m-footer-ul">
                            <li className="m-footer-li">Sitemap</li>
                            <li className="m-footer-li">API</li>
                            <li className="m-footer-li">{'↑↑↓↓ ...'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

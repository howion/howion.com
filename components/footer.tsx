import React from 'react'
import { Anchor } from './anchor'
import { Emblem } from '/components/emblem'

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
                            <li className="m-footer-li">Home</li>
                            <li className="m-footer-li">Projects</li>
                            <li className="m-footer-li">Resume</li>
                            <li className="m-footer-li">Source</li>
                        </ul>
                    </div>
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">HowionLab</span>
                        <ul className="m-footer-ul">
                            <li className="m-footer-li">Terminal</li>
                            <li className="m-footer-li">Speculo</li>
                        </ul>
                    </div>
                    <div className="m-footer-section">
                        <span className="m-footer-section-title">TECH STACK</span>
                        <ul className="m-footer-ul">
                            <li className="m-footer-li">NextJS 13 (TS + SASS)</li>
                            <li className="m-footer-li">Vercel</li>
                            <li className="m-footer-li">Figma</li>
                            <li className="m-footer-li">Simple Icons</li>
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

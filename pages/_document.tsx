import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

/*
 * [TODO:]
 * ADD MANIFEST
 * ADD SPLASH
 * ADD THEME COLOR
 * ADD APPLE-TOUCH ICON
 * ADD MASKABLE ICON
 * ADD META
 * REDIRECT HTTP TO HTTPS
 */

/* eslint max-len: 0 */
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="referrer" content="none" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preload" as="style" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <link rel="stylesheet" type="text/css" href="/font/neue_montreal/stylesheet.css" />
                </Head>
                <body style={{ backgroundColor: '#010102' }}>
                    <Main />
                    {/* <Splash /> */}
                    <NextScript />
                </body>
            </Html>
        )
    }
}

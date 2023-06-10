import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import crypto from 'node:crypto'
import { v4 } from 'uuid'

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

const enableCSP = true

interface CreatedCSP {
    csp: text
    nonce: text
}

const createCSP = (): CreatedCSP => {
    const isProduction = process.env.NODE_ENV === 'production'

    // generate random nonce converted to base64. Must be different on every HTTP page load
    const hash = crypto.createHash('sha256')
    hash.update(v4())
    const nonce = hash.digest('base64')

    // See: https://www.hyperxiao.top/en/posts/6
    const csp = `
default-src 'self';
script-src 'self' ${isProduction ? '' : '\'unsafe-eval\''} 'nonce-${nonce}';
frame-src 'self';
base-uri 'self';
block-all-mixed-content;
font-src 'self' https: data:;
img-src * 'self' data: https;
object-src 'none';
script-src-attr 'none';
style-src 'self' https: 'unsafe-inline';
upgrade-insecure-requests;
`.replaceAll('\n', ' ')

    return { csp, nonce }
}

type MyDocumentProps = {
    nonce: text
}

/* eslint max-len: 0 */
export default class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & MyDocumentProps> {
        const initialProps = await Document.getInitialProps(ctx)
        const { csp, nonce } = createCSP()
        const res = ctx?.res

        if (res != null && !res.headersSent) {
            res.setHeader('Content-Security-Policy', csp)
        }

        return {
            ...initialProps,
            nonce
        }
    }

    render(): ReactElement {
        const nonce = enableCSP ? this.props.nonce : undefined

        return (
            <Html lang="en">
                <Head nonce={nonce}>
                    <meta charSet="UTF-8" nonce={nonce} />
                    <meta name="referrer" content="none" nonce={nonce} />
                    <link rel="icon" href="/favicon.ico" nonce={nonce} />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        nonce={nonce}
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        nonce={nonce}
                    />
                    {/* <link rel="stylesheet" type="text/css" href="" nonce={nonce} /> */}
                </Head>
                <body style={{ backgroundColor: '#010102' }}>
                    <Main />
                    {/* <Splash /> */}
                    <NextScript nonce={nonce} />
                </body>
            </Html>
        )
    }
}

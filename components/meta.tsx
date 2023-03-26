import type { NextSeoProps } from 'next-seo'

import React from 'react'
import { DefaultSeo } from 'next-seo'
import { App } from '/constants/app'
import Head from 'next/head'

export interface MetaProps extends Omit<NextSeoProps, 'titleTemplate' | 'defaultTitle'> {
    keywords?: text[]
    author?: text
    themeColor?: text
    __setViewport?: boolean
}

export function Meta(props: MetaProps): FCReturn<MetaProps> {
    const { keywords, title, description, author, themeColor, __setViewport, ...seoProps } = props
    const _keywords = keywords ?? App.defaults.keywords

    return (
        <>
            <Head>
                <title>{title ? `${title} - ${App.name}` : App.name}</title>
                {__setViewport ? (
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    />
                ) : undefined}
                <meta name="keywords" content={_keywords.join(', ')} />
                <meta name="author" content={author || App.defaults.author} />
                <meta name="theme-color" content={themeColor || App.defaults.themeColor} />
            </Head>
            <DefaultSeo description={description || App.defaults.description} {...seoProps} />
        </>
    )
}

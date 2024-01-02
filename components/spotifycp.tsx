import React, { useState } from 'react'
import { useDidMount } from 'rooks'
import Image from 'next/image'
import axios from 'axios'

import spotifyIcon from '/public/img/icon/spotify.svg'

export function SpotifyCP(): FCReturn {
    const [show, setShow] = useState(false)
    const [coverURL, setCoverURL] = useState('')
    const [artists, setArtists] = useState([])
    const [name, setName] = useState('')

    useDidMount(() => {
        axios
            .get('/api/spotify/cp')
            .then((res) => {
                if (res.data.success !== true) {
                    setShow(false)
                    return
                }
                const track = res.data.data.track
                const images = track.item.album.images as any[]

                setName(track.item.name)
                setArtists(track.item.artists)

                if (images.length > 0) {
                    setCoverURL(images.sort((a, b) => a.height - b.height)[0].url)
                }

                setShow(true)
            })
            .catch(() => {
                setShow(false)
            })
    })

    if (!show) return null

    return (
        <div className="m-spotifycp">
            <div className="m-spotifycp-music">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverURL} className="m-spotifycp-music-pic" alt="" />
                <div className="m-spotifycp-music-detail">
                    <span className="m-spotifycp-music-detail-name">{name}</span>
                    <span className="m-spotifycp-music-detail-credits">
                        {artists.map((v: any, i) => (
                            <a key={i} href={v.external_urls?.spotify ?? '#'} target="_blank" rel="noopener noreferrer">
                                {v.name}
                            </a>
                        ))}
                    </span>
                </div>
            </div>
            <Image
                priority={true}
                className="m-spotifycp-icon"
                src={spotifyIcon}
                alt=""
            />
        </div>
    )
}

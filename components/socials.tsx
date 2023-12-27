import React from 'react'

import {
    siBehance,
    siDevdotto,
    siDeviantart,
    siDribbble,
    siGithub,
    siImdb,
    siInstagram,
    siLinkedin,
    SimpleIcon,
    siNpm,
    siOrcid,
    siProducthunt,
    siReddit,
    siSpotify,
    siStackexchange,
    siStackoverflow,
    siSteam,
    siTwitter
} from 'simple-icons'
import { invertColor } from '/utils/color.util'

interface SocialProps {
    icon: SimpleIcon
    link: text
    dark?: boolean
}

function Social(props: SocialProps): FCReturn {
    const color = props.dark ? '#fff' : `#${props.icon.hex}`

    return (
        <a
            className="m-socials-social"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                // @ts-ignore ts!
                '--hover-color': color
            }}
        >
            <svg
                className="m-socials-social-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill={props.dark ? '#fff' : invertColor(color)}
                viewBox="0 0 24 24"
            >
                <path d={props.icon.path} />
            </svg>
        </a>
    )
}

export function Socials(): FCReturn {
    return (
        <div className="m-socials m-container m-max-lx">
            {/* <div className="m-socials-social-selector"></div> */}
            <Social icon={siGithub} dark link="https://github.com/howion" />
            <Social icon={siTwitter} link="https://twitter.com/howionwastaken" />
            <Social icon={siBehance} link="https://www.behance.net/howion" />
            <Social icon={siDribbble} link="https://dribbble.com/howion" />
            <Social icon={siLinkedin} link="https://www.linkedin.com/in/omer-mert-coskun/" />
            <Social icon={siImdb} link="https://www.imdb.com/user/ur106540372/" />
            <Social icon={siSpotify} link="https://open.spotify.com/user/avxit10lkjwlmlw605mxg7nbe" />
            <Social icon={siStackoverflow} link="https://stackoverflow.com/users/11771918/howion" />
            <Social icon={siStackexchange} link="https://math.stackexchange.com/users/698088/howion" />
            <Social icon={siNpm} link="https://www.npmjs.com/~howion" />
            <Social icon={siProducthunt} link="https://www.producthunt.com/@howion" />
            <Social icon={siDeviantart} link="https://www.deviantart.com/howion" />
            <Social icon={siReddit} link="https://www.reddit.com/user/howionwastaken" />
            <Social icon={siOrcid} link="https://orcid.org/0000-0002-8324-2325" />
            <Social icon={siDevdotto} dark link="https://dev.to/howion" />
            <Social icon={siSteam} dark link="https://steamcommunity.com/id/howion/" />
            <Social icon={siInstagram} link="https://www.instagram.com/omermertcoskun/" />
        </div>
    )
}

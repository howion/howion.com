import SpotifyWebApi from 'spotify-web-api-node'

export class SpotifyModel {
    protected static _connector: SpotifyWebApi | undefined = undefined
    // protected static _last

    protected static async initialize(): Promise<boolean> {
        SpotifyModel._connector = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
            refreshToken: process.env.SPOTIFY_REFRESH_TOKEN
            // redirectUri: process.env.SPOTIFY_REDIRECT_URI
        })

        const accessTokenRes = await SpotifyModel._connector.refreshAccessToken()

        if (accessTokenRes.statusCode !== 200) return false

        SpotifyModel._connector.setAccessToken(accessTokenRes.body.access_token)

        return true
    }

    public static async client(): Promise<SpotifyWebApi> {
        await SpotifyModel.initialize()
        return SpotifyModel._connector!
    }
}

import type { ApiRequest, ApiResponse } from '/types/api'
import { HTTPStatusCode } from '/constants/http-status-code'
import { checkMethod, CORS } from '/utils/api.util'
import { SpotifyModel } from '/models/spotify.model'

export default async function SpotifyCP(req: ApiRequest, res: ApiResponse<any>): Promise<void> {
    await CORS(req, res)
    // --------------------------------------------------------------------------
    if (!checkMethod(req, res, ['GET'])) return
    //--------------------------------------------------------------------------
    // const body = checkJoi(req, res, GetUserJoi)
    // if (!body) return
    //--------------------------------------------------------------------------

    const c = await SpotifyModel.client()
    const track = await c.getMyCurrentPlayingTrack()

    if (track.statusCode < 200 || track.statusCode > 299) {
        return res.status(HTTPStatusCode.ServiceUnavailable).json({
            success: false
        })
    }

    return res.status(HTTPStatusCode.OK).json({
        success: true,
        data: {
            track: track.body
        }
    })
}

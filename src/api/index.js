import service from '@/utils/request.js'
import { objToUrl } from '@/utils/common.js'

export const discordOauthToken = (data) => {
    return service({
        url: `/api/needex/discord/oauth/token${objToUrl(data)}`,
        method: 'get'
    })
}
// 登录
export const marketUserLogin = (data) => {
    return service({
        url: `/market/user/login`,
        method: 'post',
        data
    })
}

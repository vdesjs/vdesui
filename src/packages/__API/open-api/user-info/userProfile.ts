import vdes from "../.."
import { getAuthorizeScope } from "../authorize/scope"


interface UserProfileObj {
    lang?: Lang,
    desc?: string,
    success?: (successObj: SuccessObj) => void,
    fail?: () => void
    complete?: () => void

}

type Lang = 'en' | 'zh_CN' | 'zh_TW'

interface SuccessObj {
    userinfo?: UserInfo,
    rawData?: string,
    signature?: string,
    encryptedData?: string,
    iv?: string,
    cloudID?: string
}

interface UserInfo {
    nickName?: string,
    avatarUrl?: string,
    gender?: number,
    country?: string,
    province?: string,
    city?: string
    language?: string
}


export function getUserProfile(obj: UserProfileObj) {
    // 判断是否有权限
    if(!getAuthorizeScope('scope.userProfile')) {
        vdes.authorize({
            scope: 'scope.userProfile',
            success() {
                obj.success?.({

                })
            }
            
        })
    } else {
        obj.success?.({
            
        })
    }
}
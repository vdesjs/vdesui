import vdes from '../..';
import { getAuthorizeScope } from '../authorize/scope';

interface UserProfileObj {
  lang?: Lang;
  desc?: string;
  success?: (successObj: SuccessObj) => void;
  fail?: () => void;
  complete?: () => void;
}

type Lang = 'en' | 'zh_CN' | 'zh_TW';

interface SuccessObj {
  userInfo?: UserInfo;
  rawData?: string;
  signature?: string;
  encryptedData?: string;
  iv?: string;
  cloudID?: string;
  errMsg?: string;
}

interface UserInfo {
  nickName?: string;
  avatarUrl?: string;
  gender?: number;
  country?: string;
  province?: string;
  city?: string;
  language?: string;
}

const data: SuccessObj = {
  errMsg: 'getUserProfile:ok',
  encryptedData:
    'gsd5a7T8MLQltvqVgk8UY3BBaceh1cPwSWs0teWV62fpp7z08dg/lu3ga2Jm9cYzizBY2um1VXP0TDrrf4kk+vN2VP4yRYiSz0z77Nqbsu37Uz/ssqzY/nXSbSmzZmLbABPDcMccRcNvoycx0Sh7xLq22huEoeea7C6toeeeKWi85gIeSMiOkAEQzz44KuV1fM9bFhS9CuLaF5sDeKb65JfeaOzK2i54G4QAair7yfsx447UVrIzAQFDVzZZq7xH1Huh7BP3SQX5kVdjL+jh7X+G4pVCx9mvfTUBFAPoWeXNc6aU45yf0r70Ay6vGREmENDgqSq6DiBmOxhgKpl2uIpUYjkCqTnJLG5Cwqbp3m32ZXJkNR7vIA1erEaw8ZPvak0K0/li5MMXgPO7SoNOagKaMRN6G5kC04DSy4BFMsU=',
  iv: 'Xccr84TVUiUbn/Wg2r+kKg==',
  rawData: `{"nickName":"斌","gender":1,"language":"zh_CN","city":"Shaoyang","province":"Hunan","country":"China","avatarUrl":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eriaibJARBbB15m46dO6rHGXh6PVnnVb05lhnmCtz6ibQsPC2ymSZhRgHMLyaG9sXhq0nWz90Nqkyic2A/132"}`,
  signature: '9c65c7dcd0fac947247b6103c2b11be334f0af07',
  userInfo: {
    avatarUrl:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eriaibJARBbB15m46dO6rHGXh6PVnnVb05lhnmCtz6ibQsPC2ymSZhRgHMLyaG9sXhq0nWz90Nqkyic2A/132',
    city: 'Shaoyang',
    country: 'China',
    gender: 1,
    language: 'zh_CN',
    nickName: '斌',
    province: 'Hunan'
  }
};

export function getUserProfile(obj: UserProfileObj) {
  // 判断是否有权限
  if (!getAuthorizeScope('scope.userProfile')) {
    vdes.authorize({
      scope: 'scope.userProfile',
      success() {
        obj.success?.(data);
      }
    });
  } else {
    obj.success?.(data);
  }
}

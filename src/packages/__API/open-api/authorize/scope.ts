export type AuthorizeScope =
  | 'scope.userProfile'
  | 'scope.userLocation'
  | 'scope.userLocationBackground'
  | 'scope.werun'
  | 'scope.record'
  | 'scope.writePhotosAlbum'
  | 'scope.camera';

const SCOPE_KEY = 'vdesui_scope_';

const AUTH_ENABLE = '1';
const AUTH_DISABLE = '0';

export const authorizeList: Record<AuthorizeScope, string> = {
  'scope.userProfile': '使用我的用户信息',
  'scope.userLocation': '地理位置',
  'scope.userLocationBackground': '后台获取地理位置',
  'scope.werun': '微信运动步数',
  'scope.record': '使用你的麦克风',
  'scope.writePhotosAlbum': '使用相册',
  'scope.camera': '使用你的摄像头'
};

interface ExistObj {
  authorize: AuthorizeScope;
  desc: string;
  isOpen: boolean;
}

export type AuthSetting = Record<string, boolean>;

export function getAuthorizeExistList(): AuthSetting {
  const exitList: AuthSetting = {};

  Object.keys(authorizeList).forEach((authorize: AuthorizeScope) => {
    console.log(authorize);
    if (localStorage.getItem(SCOPE_KEY + authorize) != null) {
      // 权限存在
      exitList[authorize] =
        localStorage.getItem(SCOPE_KEY + authorize) == AUTH_ENABLE
          ? true
          : false;

    }
  });

  console.log(exitList)
  return exitList;
}

export function getAuthorizeScope(scope?: AuthorizeScope): boolean {
  if (localStorage.getItem(SCOPE_KEY + scope) == null) {
    return false;
  } else {
    if (localStorage.getItem(SCOPE_KEY + scope) == AUTH_DISABLE) {
      return false;
    } else {
      return true;
    }
  }
}

export function enableAuhorizeScope(scope?: AuthorizeScope) {
  if (scope == null) {
    return;
  }
  if (scope == 'scope.userProfile') {
    // scope.userProfile 不进行永久授权，需要用户每次点击弹窗授权。
    return;
  }
  localStorage.setItem(SCOPE_KEY + scope, AUTH_ENABLE);
}

export function disableAuhorizeScope(scope?: AuthorizeScope) {
  if (scope == null) {
    return;
  }
  localStorage.setItem(SCOPE_KEY + scope, AUTH_DISABLE);
}

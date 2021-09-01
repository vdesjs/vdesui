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
  localStorage.setItem(SCOPE_KEY + scope, AUTH_ENABLE);
}

export function disableAuhorizeScope(scope?: AuthorizeScope) {
  if (scope == null) {
    return;
  }
  localStorage.setItem(SCOPE_KEY + scope, AUTH_DISABLE);
}

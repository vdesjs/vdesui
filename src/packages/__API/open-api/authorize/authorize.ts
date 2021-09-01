import { AuthorizeScope, getAuthorizeScope } from './scope';
import { showModal } from '../../ui/interaction/showModal';
import { getMobileGlobal } from '../../common/constant';

export interface AuthorizeObj {
  dialogShow?: boolean;
  scope?: AuthorizeScope;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

export function authorize(obj: AuthorizeObj) {
  if (getAuthorizeScope(obj?.scope)) {
    // 已有授权
    obj.success?.();
  } else {

    
    const mobileGlobal = getMobileGlobal();

    mobileGlobal.authDialog.success = obj.success
    mobileGlobal.authDialog.fail = obj.fail
    mobileGlobal.authDialog.complete = obj.complete


    // 弹窗给予用户选择是否同意授权
    mobileGlobal.authDialog.dialogShow = true
    mobileGlobal.authDialog.scope = obj.scope

    
  }
}

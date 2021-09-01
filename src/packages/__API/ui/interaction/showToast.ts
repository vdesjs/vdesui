import { isMobile } from '@/packages/utils/validate';
import { getMobileGlobal } from '../../common/constant';

export interface ToastObj {
  dialogShow?: boolean;
  title?: string;
  icon?: Icon;
  duration?: number;
  mask?: boolean;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

type Icon = 'success' | 'error' | 'loading' | 'none';

export function showToast(obj: ToastObj) {
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.toast.dialogShow = true;
  mobileGlobal.toast.title = obj.title;
  mobileGlobal.toast.icon = obj.icon ? obj.icon : 'success'
  console.log(mobileGlobal.toast)
}

export function hideToast(obj?: {
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}) {
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.toast = {
    dialogShow: false
  }
}

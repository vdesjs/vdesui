import { getMobileGlobal } from '../../common/constant';

export interface WxLoadingObj {
  dialogShow?: boolean;
  title?: string;
  mask?: boolean;
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}

export function showLoading(obj: WxLoadingObj) {
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.loading.dialogShow = true;
  mobileGlobal.loading.title = obj.title;
}

export function hideLoading(obj?: {
  success?: () => void;
  fail?: () => void;
  complete?: () => void;
}) {
    const mobileGlobal = getMobileGlobal();
    mobileGlobal.loading = {
      dialogShow: false
    }
}

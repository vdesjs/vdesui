import { GlobalType } from '@/sites/mobile/store/global';

export function getMobileGlobal(): GlobalType {
  // @ts-ignore
  return window.vdesMobileGlobal;
}

interface WxappInfo {
  appname?: string;
}
const WXAPPINFO_KEY = 'vdesui_wxappinfo';

export function getWxappInfo(): WxappInfo {
  const str = localStorage.getItem(WXAPPINFO_KEY);

  const retObj: WxappInfo = str ? JSON.parse(str) : null;

  return retObj;
}

export function setWxappInfo(obj: WxappInfo) {
  const str = JSON.stringify(obj);
  localStorage.setItem(WXAPPINFO_KEY, str);
}

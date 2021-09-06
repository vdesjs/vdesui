import { getMobileGlobal } from "../../common/constant";
import { AuthSetting } from "../authorize/scope";



export interface OpenSeetingObj {
  dialogShow?: Boolean,
  withSubscriptions?: Boolean,
  success?: (res: SuccesObj) => void,
  fail?: () => void,
  complete?: () => void
}

interface SuccesObj {
  authSetting: AuthSetting
}

export function openSetting(obj: OpenSeetingObj) {
  console.log("oepnSeeting")
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.seeting.dialogShow = true

}
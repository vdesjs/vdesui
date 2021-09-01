import { getMobileGlobal } from '../../common/constant';

export interface ActionSheetObj {
  dialogShow?: boolean;
  alertText?: string;
  itemList: string[];
  itemColor?: string[];
  success?: (obj: SuccessObj) => void;
  fail?: () => void;
  complete?: () => void;
}

interface SuccessObj {
  tapIndex?: number;
}

export function showActionSheet(obj: ActionSheetObj) {
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.actionSheet.dialogShow = true;
  mobileGlobal.actionSheet.itemList = obj.itemList;
  mobileGlobal.actionSheet.success = obj.success;
}

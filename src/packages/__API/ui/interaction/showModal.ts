import { getMobileGlobal } from '../../common/constant';

export interface ModalObj {
  dialogShow?: boolean;
  title?: string;
  content?: string;
  showCancel?: boolean;
  cancelText?: string;
  cancelColor?: string;
  confirmText?: string;
  confirmColor?: string;
  editable?: boolean;
  placeholderText?: string;
  success?: (obj?: SucccessObj) => void;
  fail?: () => void;
  complete?: () => void;
}

interface SucccessObj {
  content?: string;
  confirm?: boolean;
  cancel?: boolean;
}

export function showModal(obj: ModalObj) {
  const mobileGlobal = getMobileGlobal();
  mobileGlobal.modal.dialogShow = true;
  mobileGlobal.modal.title = obj.title
  mobileGlobal.modal.content = obj.content;
  mobileGlobal.modal.showCancel =
    obj.showCancel != null ? obj.showCancel : true;
  mobileGlobal.modal.cancelText = obj.cancelText ? obj.cancelText : '取消';
  mobileGlobal.modal.cancelColor = obj.cancelColor
    ? obj.cancelColor
    : '#000000';
  mobileGlobal.modal.confirmText = obj.confirmText ? obj.confirmText : '确定';
  mobileGlobal.modal.confirmColor = obj.confirmColor
    ? obj.confirmColor
    : '#576B95';
  mobileGlobal.modal.editable = obj.editable != null ? obj.editable : false;
  mobileGlobal.modal.placeholderText = obj.placeholderText;

  mobileGlobal.modal.success = obj.success

  //   Object.assign(getMobileGlobal().modal, obj);
}

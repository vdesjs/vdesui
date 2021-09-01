import { WxLoadingObj } from '@/packages/__API/ui/interaction/showLoading';
import { ModalObj } from '@/packages/__API/ui/interaction/showModal';
import { reactive } from 'vue';
import {ToastObj} from '@/packages/__API/ui/interaction/showToast'
import { ActionSheetObj } from '@/packages/__API/ui/interaction/showActionSheet';
import { AuthorizeObj } from '@/packages/__API/open-api/authorize/authorize';
import { setWxappInfo } from '@/packages/__API/common/constant';

interface AuthorzeExtendObj {
  desc?: string;

}

export interface GlobalType {
  title?: string;
  modal: ModalObj;
  loading: WxLoadingObj;
  toast: ToastObj;
  actionSheet: ActionSheetObj;
  authDialog: AuthorizeObj & AuthorzeExtendObj
}

const mobileGlobal = reactive<GlobalType>({
  title: '',
  modal: {
    dialogShow: false
  },
  loading: {
    dialogShow: false
  },
  toast: {
    dialogShow: false
  },
  actionSheet: {
    dialogShow: false,
    itemList: []
  },
  authDialog: {
    dialogShow: false,
  }
});

// 将响应式数据暴露给window对象
export function install() {
  // @ts-ignore
  window.vdesMobileGlobal = mobileGlobal;

  setWxappInfo({
    appname: 'wxid测试小程序'
  })
}

export function useGlobal(): {
  mobileGlobal: GlobalType;
  install: () => void;
} {
  return { mobileGlobal, install };
}

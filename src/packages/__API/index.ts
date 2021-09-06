import { getUserProfile } from './open-api/user-info/userProfile';
import { authorize } from './open-api/authorize/authorize';
import { login } from './open-api/login/login';
import { request } from './network/request/request';
import { showModal } from './ui/interaction/showModal';
import { setNavigationBarTitle } from './ui/navigation-bar/setNavigationBarTitle';
import { showLoading, hideLoading } from './ui/interaction/showLoading';
import { showToast, hideToast} from './ui/interaction/showToast';
import { showActionSheet } from './ui/interaction/showActionSheet';
import {openSetting} from "./open-api/seeting/openSetting"
// interface vdes {
//     getUserInfo: () => void
// }

const vdes = {
  getUserProfile,
  authorize,
  login,
  request,
  showModal,
  setNavigationBarTitle,
  showLoading,
  hideLoading,
  showToast,
  hideToast,
  showActionSheet,
  openSetting,


  install,
};

function install() {
  // @ts-ignore
  window.vdes = vdes;
}

export default vdes;

<script lang="tsx">
import { computed, defineComponent, reactive } from '@vue/runtime-core';
import { useGlobal } from '../store/global';
import shareImg from '../../common/assets/wximages/share.png';
import headPortraitImg from '../../common/assets/wximages/head-portrait.jpeg';
import {
  AuthorizeScope,
  disableAuhorizeScope,
  enableAuhorizeScope
} from '@/packages/__API/open-api/authorize/scope';
import { getWxappInfo } from '@/packages/__API/common/constant';

export default defineComponent({
  setup() {
    const { mobileGlobal } = useGlobal();

    const closeDialog = () => {
      mobileGlobal.authDialog = {
        dialogShow: false
      };
    };

    const enable = () => {
      // if (mobileGlobal.authDialog.scope == 'scope.userLocationBackground') {
      //   // 根据选中的列表项来赋予权限
      //   if (lbData.currentIndex == 0) {
      //     enableAuhorizeScope('scope.userLocation');
      //   } else if (lbData.currentIndex == 1) {
      //     enableAuhorizeScope('scope.userLocationBackground');
      //   }
      // } else {
      //   enableAuhorizeScope(mobileGlobal.authDialog.scope);
      // }

      enableAuhorizeScope(mobileGlobal.authDialog.scope);
      mobileGlobal.authDialog.success?.();
      closeDialog();
    };

    const disable = () => {
      disableAuhorizeScope(mobileGlobal.authDialog.scope);
      closeDialog();
    };

    const title = computed(() => {
      return getWxappInfo().appname;
    });

    const agreeTextMap: Record<AuthorizeScope, string> = {
      'scope.userProfile': '获取你的昵称、头像、地区及性别',
      'scope.userLocation': '需要获取你的地理位置',
      'scope.userLocationBackground': '需要获取你的地理位置',
      'scope.werun': '获取你的微信步数',
      'scope.record': '使用你的麦克风',
      'scope.writePhotosAlbum': '保存图片或视频到你的相册',
      'scope.camera': '使用你的摄像头'
    };
    const agreeText = computed(() => {
      const scope = mobileGlobal.authDialog.scope;
      return scope ? agreeTextMap[scope] : '';
    });

    const dialogShow = computed(() => {
      return mobileGlobal.authDialog.dialogShow;
    });
    const desc = computed(() => {
      return mobileGlobal.authDialog.desc;
    });

    const lbData = reactive({
      items: ['在使用小程序期间', '在使用小程序期间和离开小程序后'],
      currentIndex: 0
    });

    const renderUserList = () => {
      if (mobileGlobal.authDialog.scope == 'scope.userProfile') {
        return (
          <div class="auth-dialog-userList">
            <div class="auth-dialog-userListItem">
              <img src={headPortraitImg} />
              <div class="auth-dialog-userListItem-userBox">
                <span class="auth-dialog-userListItem-username">斌</span>
                <span class="auth-dialog-userListItem-ext">微信个人信息</span>
              </div>
              <i class="uiv2-icon-success"></i>
            </div>
          </div>
        );
      }

      if (mobileGlobal.authDialog.scope == 'scope.userLocationBackground') {
        return (
          <div class="auth-dialog-list">
            {lbData.items.map((item, index) => {
              return (
                <div
                  class="auth-dialog-agree-select"
                  onClick={() => (lbData.currentIndex = index)}
                >
                  {item}
                  {lbData.currentIndex == index ? (
                    <i class="uiv2-icon-success"></i>
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
          </div>
        );
      }
    };

    return () => {
      return dialogShow.value ? (
        <div class="auth-dialog">
          <div class="weui-mask"></div>
          <div class="auth-dialog-body">
            <div class="auth-dialog__bd">
              <div class="auth-dialog-content">
                <div class="auth-dialog-title">
                  <img class="auth-dialog-title-img" src={shareImg} />
                  <span class="auth-dialog-title-appname">{title.value}</span>
                  <span class="auth-dialog-title-apply">申请</span>
                </div>
                <div class="auth-dialog-list">
                  <div class="auth-dialog-agree">
                    <span class="auth-dialog-agree__text">
                      {agreeText.value}
                    </span>
                    <br />
                    <span class="auth-dialog-agree__ext">{desc.value}</span>
                  </div>
                </div>
                {renderUserList()}
              </div>
            </div>
            <div class="auth-dialog__ft">
              <button
                class="uiv2-button uiv2-button-default"
                data-type="authorize"
                onClick={disable}
              >
                拒绝
              </button>
              <button
                class="uiv2-button uiv2-button-primary"
                data-type="authorize"
                onClick={enable}
              >
                允许
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      );
    };
  }
});
</script>
<style lang="scss">
.auth-dialog-body {
  border-radius: 6px 6px 0 0;
  background-color: var(--weui-BG-0);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  backface-visibility: hidden;
  z-index: 5000;
  overflow: hidden;
}
.auth-dialog-content {
  position: relative;
  padding-top: 10px;
  text-align: left;
}
.auth-dialog-body .auth-dialog-title {
  height: 30px;
  line-height: 30px;
  color: var(--weui-FG-0);
  font-size: 13px;
}
.auth-dialog-title {
  margin-top: 10px;
  color: var(--weui-FG-0);
}

.auth-dialog-body .auth-dialog-title .auth-dialog-title-img {
  width: 20px;
  border-radius: 50%;
  height: 20px;
  margin-right: 8px;
  vertical-align: middle;
}

.auth-dialog-body .auth-dialog-title .auth-dialog-title-appname {
  display: inline-block;
  max-width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 5px;
  vertical-align: middle;
}
.auth-dialog-body .auth-dialog-title .auth-dialog-title-apply {
  display: inline-block;
  vertical-align: bottom;
}
.auth-dialog-body .auth-dialog-list {
  margin-bottom: 10px;
}
.auth-dialog-list {
  position: relative;
  margin-top: 10px;
  padding-top: 10px;
  font-size: 13px;
  margin-bottom: 20px;
}
.auth-dialog-list .auth-dialog-agree {
  color: var(--weui-FG-0);
  font-size: 14px;
  font-weight: 500;
}
.auth-dialog-list .auth-dialog-agree .auth-dialog-agree__ext {
  font-size: 12px;
  color: var(--weui-FG-1);
}
.auth-dialog-userList .auth-dialog-userListItem {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 13px;
}
.auth-dialog-userList .auth-dialog-userListItem img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 2px;
}

.auth-dialog-userList
  .auth-dialog-userListItem
  .auth-dialog-userListItem-userBox {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
.auth-dialog-userList
  .auth-dialog-userListItem
  .auth-dialog-userListItem-userBox
  .auth-dialog-userListItem-username {
  color: var(--weui-FG-0);
}

.auth-dialog-userList
  .auth-dialog-userListItem
  .auth-dialog-userListItem-userBox
  .auth-dialog-userListItem-ext {
  color: var(--weui-FG-1);
  font-size: 12px;
}
.uiv2-icon-success {
  background-size: cover;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1599462525855' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1095' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M378.410667 850.450963C364.491852 850.450963 350.610963 845.293037 340.02963 834.939259L20.920889 523.529481C-0.279704 502.821926-0.279704 469.295407 20.920889 448.587852 42.121481 427.880296 76.48237 427.880296 97.682963 448.587852L378.410667 722.526815 925.75763 188.491852C946.958222 167.784296 981.319111 167.784296 1002.519704 188.491852 1023.720296 209.161481 1023.720296 242.688 1002.519704 263.395556L416.791704 834.939259C406.172444 845.293037 392.291556 850.450963 378.410667 850.450963L378.410667 850.450963Z' p-id='1096' fill='%231afa29'%3E%3C/path%3E%3C/svg%3E");
}

.uiv2-icon-nerve,
.uiv2-icon-success {
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
}

.auth-dialog__ft {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 30px;
}

.auth-dialog__ft .uiv2-button-default {
  background-color: var(--weui-BTN-DEFAULT-BG);
  color: var(--weui-BTN-DEFAULT-COLOR);
}
.auth-dialog__ft .uiv2-button-primary {
  margin-left: 15px;
  background-color: var(--weui-BRAND);
  color: #fff;
}
.auth-dialog__ft .uiv2-button {
  height: 30px;
  width: 90px;
  border-radius: 2px;
}
.uiv2-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  border-radius: 3px;
  outline: 0;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
  min-height: 22px;
}

.auth-dialog-list .auth-dialog-agree-select {
  color: var(--weui-FG-0);
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
  padding-top: 10px;
}
</style>

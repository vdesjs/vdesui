<script lang="tsx">
import { extend } from '@/packages/utils/base';
import { PropType, render } from '@vue/runtime-dom';
import { h, defineComponent } from 'vue';
import { getphonenumber } from './events';
import { useHover, hoverProps } from '../common/hover';
import vdes from '@/packages/__API';

export type FormType = '' | 'submit' | 'reset';
export type OpenType =
  | ''
  | 'concact'
  | 'share'
  | 'getPhoneNumber'
  | 'getUserInfo'
  | 'launchApp'
  | 'openSetting'
  | 'feedback';

const props = extend({}, hoverProps, {
  disabled: {
    type: [Boolean],
    default: false
  },
  formType: {
    type: String as PropType<FormType>,
    default: ''
  },
  openType: {
    type: String as PropType<OpenType>,
    default: ''
  },
  sessionFrom: {
    type: String,
    default: ''
  },
  sendMessageTitle: {
    type: String,
    default: ''
  },
  sendMessagePath: {
    type: String,
    default: ''
  },
  sendMessageImg: {
    type: String,
    default: ''
  },
  appParameter: {
    type: String,
    default: ''
  },
  showMessageCard: {
    type: Boolean,
    default: false
  }
});

export default defineComponent({
  name: 'vdes-button',
  props,
  emits: [
    'getuserinfo',
    'contact',
    'getphonenumber',
    'error',
    'opensetting',
    'launchapp'
  ],
  setup(props, { emit, slots }) {
    const { formType, disabled, openType } = props;

    const onClick = (e) => {
      if (disabled) {
        return;
      }
      if (openType == 'concact') {
        vdes.showModal({
          title: '模拟进入客服会话',
          content: '暂不支持打开客服会话',
          showCancel: false,
          confirmText: '返回'
        });
        console.log('暂不支持打开客服会话');

        return;
      }
      if (openType == 'share') {
        // 弹出转发页
        vdes.showModal({
          title: '发送给',
          content: '当前页面截图',
          confirmText: '发送',
          success(res) {
            console.log(res);
          }
        });

        return;
      }
      if (openType == 'getPhoneNumber') {
        emit('getphonenumber', getphonenumber());
        return;
      }

      if (openType == 'launchApp') {
        vdes.showModal({
          title: '模拟打开app',
          content: '暂不支持打开app',
          showCancel: false,
          confirmText: '返回'
        });
      }

      if (openType == 'feedback') {
        window.open(
          'https://mp.weixin.qq.com/wxawap/wapreportwxadevlog?action=complain_feedback&appid=wx8f87071483e8da1c&from=3#wechat_redirect'
        );
      }
    };
    const longpress = () => {
      console.log('longpress inner');
    };

    const renderButton = () => {
      if (formType == '') {
        return;
      } else {
        return <button type={formType}></button>;
      }
    };

    const { hoverTouchEnd, hoverTouchStart, renderHoverClass } =
      useHover(props);

    return () => {
      return (
        <div
          class={'wx-button ' + renderHoverClass()}
          onClick={onClick}
          onTouchstart={hoverTouchStart}
          onTouchend={hoverTouchEnd}
        >
          {renderButton()}
          {slots.default?.()}
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.wx-button {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  line-height: 2.55555556;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  color: #000000;
  background-color: #f8f8f8;
  cursor: pointer;

  button {
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
// size
.wx-button[size='mini'] {
  display: inline-block;
  line-height: 2.3;
  font-size: 13px;
  padding: 0 1.34em;
}
// type
.wx-button[type='default'] {
  color: #000000;
  background-color: #f8f8f8;
}
.wx-button[type='primary'] {
  color: #ffffff;
  background-color: #007aff;
}
.wx-button[type='warn'] {
  color: #ffffff;
  background-color: #e64340;
}

// plain
.wx-button[type='primary'][plain] {
  color: #007aff;
  border: 1px solid #007aff;
  background-color: transparent;
}
.wx-button[type='primary'][plain][disabled] {
  color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
}
.wx-button[type='primary'][plain]:after {
  border-width: 0;
}
.wx-button[type='default'][plain] {
  color: #353535;
  border: 1px solid #353535;
  background-color: transparent;
}
.wx-button[type='default'][plain][disabled] {
  color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
}
.wx-button[type='default'][plain]:after {
  border-width: 0;
}
.wx-button[plain] {
  color: #353535;
  border: 1px solid #353535;
  background-color: transparent;
}
.wx-button[plain][disabled] {
  color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
}
.wx-button[plain]:after {
  border-width: 0;
}

// disabled
uni-button[disabled] {
  color: rgba(255, 255, 255, 0.6);
  cursor: not-allowed;
}
uni-button[disabled][type='default'],
uni-button[disabled]:not([type]) {
  color: rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
}
uni-button[disabled][type='primary'] {
  background-color: rgba(0, 122, 255, 0.6);
}

uni-button[disabled][type='warn'] {
  background-color: #ec8b89;
}

// loading
uni-button[loading]:not([disabled]) {
  cursor: progress;
}
uni-button[loading]:before {
  content: ' ';
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  -webkit-animation: uni-loading 1s steps(12, end) infinite;
  animation: uni-loading 1s steps(12, end) infinite;
  background-size: 100%;
}
uni-button[loading][type='primary'] {
  color: rgba(255, 255, 255, 0.6);
  background-color: #0062cc;
}

uni-button[loading][type='primary'][plain] {
  color: #007aff;
  background-color: transparent;
}

uni-button[loading][type='default'] {
  color: rgba(0, 0, 0, 0.6);
  background-color: #dedede;
}

uni-button[loading][type='default'][plain] {
  color: #353535;
  background-color: transparent;
}

uni-button[loading][type='warn'] {
  color: rgba(255, 255, 255, 0.6);
  background-color: #ce3c39;
}

uni-button[loading][type='warn'][plain] {
  color: #e64340;
  background-color: transparent;
}

uni-button[loading][native]:before {
  content: none;
}
</style>

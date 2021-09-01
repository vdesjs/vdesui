<script lang="tsx">
import { defineComponent, PropType } from 'vue';

interface Button {
  extClass?: string;
  text?: string;
}

export default defineComponent({
  name: 'vdes-dialog',
  props: {
    extClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array as PropType<Button[]>,
      default: []
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'buttontap'],
  setup(props, { emit, slots }) {
    const emitButtonTap = (button: Button, index: number) => {
      const event = new CustomEvent('tap', {
        detail: {
          index,
          item: button
        }
      });
      emit('buttontap', event);
    };

    const renderBottomButtons = (buttons: Button[]) => {
      let allJsx = '';
      return (
        <vdes-view class="weui-dialog__ft">
          {buttons.map((button, index) => {
            return (
              <vdes-button
                onClick={(event) => emitButtonTap(button, index)}
                class={`weui-dialog__btn ${
                  button.extClass ? button.extClass : ''
                }`}
              >
                {button.text}
              </vdes-button>
            );
          })}
        </vdes-view>
      );
      // buttons.forEach((button) => {
      //   const buttonJsx = <vdes-button>{button.text} </vdes-button>;
      //   allJsx = allJsx + buttonJsx;
      // });
      // return allJsx;
    };

    const closeMarsk = () => {
      emit('close');
    };
    return () => {
      const { title, buttons, show, mask, maskClosable } = props;
      let showStyle = show ? 'block' : 'none';


      return (
        <vdes-view style={{ display: showStyle }}>
          {mask ? (
            <vdes-view
              class="weui-mask"
              onClick={maskClosable ? closeMarsk : ''}
            ></vdes-view>
          ) : (
            ''
          )}

          <vdes-view class="weui-dialog">
            <vdes-view class="weui-dialog__hd">
              <strong class="weui-dialog__title">{title}</strong>
            </vdes-view>
            <vdes-view class="weui-dialog__bd">{slots.default?.()}</vdes-view>

            {renderBottomButtons(buttons)}
          </vdes-view>
        </vdes-view>
      );
    };
  }
});
</script>

<style lang="scss">
.weui-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.weui-dialog {
  position: fixed;
  z-index: 5000;
  top: 50%;
  left: 16px;
  right: 16px;
  transform: translate(0, -50%);
  background-color: $weuiDialogBackgroundColor;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  max-height: 90%;
}
.weui-dialog__hd {
  padding: 32px $weuiDialogGapWidth 16px;
}

.weui-dialog__title {
  font-weight: 700;
  font-size: 17px;
  line-height: 1.4;
}

.weui-dialog__bd {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0 $weuiDialogGapWidth;
  margin-bottom: 32px;
  font-size: 17px;
  line-height: 1.4;
  hyphens: auto;
  color: rgba(0, 0, 0, 0.5);
  &:first-child {
    min-height: 40px;
    padding: 32px $weuiDialogGapWidth 0;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.9);
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

.weui-dialog__ft {
  position: relative;
  line-height: 56px;
  min-height: 56px;
  font-size: 17px;
  display: flex;
  &:after {
    content: ' ';
    @include setTopLine($weuiDialogLineColor);
  }
}

.weui-dialog__btn {
  display: block;
  flex: 1;
  color: $weuiDialogLinkColor;
  font-weight: 700;
  text-decoration: none;
  @include setTapColor();
  &:active {
    background-color: $weuiDialogLinkActiveBc;
  }

  position: relative;
  &:after {
    content: ' ';
    @include setLeftLine($weuiDialogLineColor);
  }
  &:first-child {
    &:after {
      display: none;
    }
  }
}

.weui-dialog__btn_default {
  color: rgba(0, 0, 0, 0.9);
}
</style>

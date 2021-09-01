<script lang="tsx">
import { ref, defineComponent, watchEffect } from 'vue';
import { useGlobal } from '../store/global';

export default defineComponent({
  name: 'wx-action-sheet',

  setup() {
    const { mobileGlobal } = useGlobal();
    let dialogShow = ref(mobileGlobal.actionSheet.dialogShow);
    let itemList = ref(mobileGlobal.actionSheet.itemList);
    watchEffect(() => {
      dialogShow.value = mobileGlobal.actionSheet.dialogShow;
      itemList.value = mobileGlobal.actionSheet.itemList;
    });

    const close = () => {
      mobileGlobal.actionSheet = {
        dialogShow: false,
        itemList: []
      };
    };

    const itemClick = (index: number) => {
      mobileGlobal.actionSheet.success?.({
        tapIndex: index
      });
      close();
    };

    const renderItemList = (itemList: string[]) => {
      return (
        <div class="weui-actionsheet__menu">
          {itemList.map((item, index) => {
            return (
              <div
                class="weui-actionsheet__cell"
                onClick={() => itemClick(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    };

    return () => {
      return dialogShow.value ? (
        <div>
          <div class="weui-mask ui-animate-fadeIn" onClick={close}></div>
          <div class="weui-actionsheet ui-animate-swipeInUp">
            {renderItemList(itemList.value)}
            <div class="weui-actionsheet__action">
              <div class="weui-actionsheet__cell" onClick={close}>
                取消
              </div>
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.weui-animate-fade-in {
  animation: fadeIn ease 0.3s forwards;
}

@keyframes swipeInUp {
  from {
    transform: translate(0, 100%);
  }
  to {
    transform: translate(0, 0);
  }
}

.ui-animate-swipeInUp {
  animation: swipeInUp cubic-bezier(0.23, 1, 0.32, 1) 0.3s forwards;
}

.weui-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);
  backface-visibility: hidden;
  z-index: 5000;
  width: 100%;
  background-color: $weuiBgColorPrimary;
  //slide up animation
  transition: transform 0.3s;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
}
.weui-actionsheet__menu {
  color: $weuiTextColorTitle;
  background-color: var(#fff);
}
.weui-actionsheet__cell {
  color: rgb(0, 0, 0);
  position: relative;
  padding: $weuiCellGapV;
  text-align: center;
  font-size: 17px;
  line-height: $weuiCellLineHeight;
  &:before {
    @include setTopLine($weuiCellBorderColor);
  }
  &:active {
    background-color: $weuiBgColorActive;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
}
</style>

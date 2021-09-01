<script lang="tsx">
import { ref, defineComponent, watchEffect } from 'vue';
import { useGlobal } from '../store/global';

export default defineComponent({
  name: 'wx-toast',

  setup() {
    const { mobileGlobal } = useGlobal();
    let dialogShow = ref(mobileGlobal.toast.dialogShow);
    let title = ref(mobileGlobal.toast?.title);
    let icon = ref(mobileGlobal.toast.icon);
    watchEffect(() => {
      dialogShow.value = mobileGlobal.toast.dialogShow;
      title.value = mobileGlobal.toast.title;
      icon.value = mobileGlobal.toast.icon;
      console.log(mobileGlobal.toast);
    });

    const renderIconClass = () => {
      const icomMap = {
        success: 'weui-icon-success-no-circle',
        error: 'weui-icon-warn',
        loading: 'weui-loading',
        none: 'weui-none'
      };
      return icon.value ? icomMap[icon.value] : 'fff';
    };

    return () => {
      return dialogShow.value ? (
        <div>
          <div class="weui-mask_transparent"></div>
          <div class="weui-toast">
            <i class={`weui-icon_toast ${renderIconClass()}`}></i>
            <p class="weui-toast__content">{title.value}</p>
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
[class^='weui-icon-'],
[class*=' weui-icon-'] {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  mask-position: 50% 50%;
  mask-repeat: no-repeat;
  mask-size: 100%;
  background-color: currentColor;

  // 平滑升级
  //&:not([class^="weui-icon_"]):not([class*=" weui-icon_"]){
  //    font-size:14px;
  //    margin-left: .2em;
  //    margin-right: .2em;
  //}
}

.weui-icon-success-no-circle {
  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
}

.weui-icon-warn {
  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E);
}
.weui-none {
    display: none;
}
</style>

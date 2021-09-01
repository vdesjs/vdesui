<script lang="tsx">
import { defineComponent, ref, watch, watchEffect } from 'vue';
import { useGlobal } from '../store/global';

export default defineComponent({
  name: 'wx-loading',
  setup() {
    const { mobileGlobal } = useGlobal();

    let dialogShow = ref(mobileGlobal.loading.dialogShow);
    console.log('dialogShow', dialogShow.value);
    let title = ref(mobileGlobal.loading?.title);
    watchEffect(() => {
      dialogShow.value = mobileGlobal.loading.dialogShow;
      title.value = mobileGlobal.loading.title;

      console.log(mobileGlobal.loading);
    });
    // const close = () => {
    //   console.log('close');
    //   mobileGlobal.loading = {
    //     dialogShow: false
    //   };
    // };

    return () => {
      return dialogShow.value ? (
        <div>
          <div class="weui-mask_transparent"></div>
          <div class="weui-toast">
            <i class="weui-icon_toast weui-loading"> </i>
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
.weui-mask_transparent {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.weui-toast {
  position: fixed;
  z-index: 5000;
  width: 136px;
  height: 136px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  line-height: 1.4;
}

.weui-icon_toast {
  display: block;
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  &.weui-icon-success-no-circle {
    color: rgba(255, 255, 255, 0.9);
  }
  &.weui-icon-warn {
    color: rgba(255, 255, 255, 0.9);
  }
  &.weui-loading {
    width: 36px;
    height: 36px;
  }
  &.weui-primary-loading {
    font-size: 40px;
    color: #ededed;
    &:before {
      border-width: 4px 0 4px 4px;
    }
    &:after {
      border-width: 4px 4px 4px 0;
    }
    .weui-primary-loading__dot {
      width: 4px;
      height: 4px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}

.weui-loading {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  animation: weuiLoading 1s steps(12, end) infinite;
  background: transparent
    url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E")
    no-repeat;
  background-size: 100%;

  &.weui-loading_transparent,
  .weui-btn_loading.weui-btn_primary & {
    background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E");
  }
}

@-webkit-keyframes weuiLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

@keyframes weuiLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.weui-toast__content {
  font-size: 17px;
  padding: 0 12px;
  @include hyphens();
}
</style>

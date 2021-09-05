<template>
  <div class="simulator-seeting" v-if="data.show">
    <TopBar></TopBar>
    <div class="nav">
      <div class="back" @click="onBack">
        <i class="icon"></i>
      </div>
      <div class="title">
        <h3 class="text">
          <i class="loading" v-show="false"></i>
          设置
        </h3>
      </div>
    </div>

    <div class="setting">
      <div class="weui-cells__title">
        <p>允许 “xxxxx” 使用我的</p>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell weui-cell_switch"
          ><div class="weui-cell__bd">微信运动步数</div
          ><div class="weui-cell__ft"
            ><input class="weui-switch auto_test_switch" type="checkbox" /></div
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import TopBar from '../components/TopBar.vue';

const data = reactive({
  show: true
});

const onBack = () => {
  data.show = false;
};
</script>

<style lang="scss">
.simulator-seeting {
  height: 667px;
  width: 375px;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 var(--FG-4), 0 8px 10px 0 var(--FG-4);

  .setting {
  }
}
</style>

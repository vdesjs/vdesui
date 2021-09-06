<template>
  <div class="simulator-seeting" v-if="dialogShow">
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
      <vdes-cells title="允许 “xxxxx” 使用我的">
        <vdes-cell
          v-for="auth in Object.keys(authorizeExistList)"
          :value="getAuthorizeText(auth)"
        >
          <template #footer
            ><vdes-switch
              @change="switchAuthorize($event, auth)"
              :checked="authorizeExistList[auth]"
            ></vdes-switch
          ></template>
        </vdes-cell>
      </vdes-cells>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getAuthorizeExistList,
  authorizeList,
  enableAuhorizeScope,
  disableAuhorizeScope
} from '@/packages/__API/open-api/authorize/scope';
import { onUpdated, watchEffect } from 'vue';
import { ref } from 'vue';
import TopBar from '../components/TopBar.vue';
import { useGlobal } from '../store/global';

const { mobileGlobal } = useGlobal();

let dialogShow = ref(mobileGlobal.seeting.dialogShow);

watchEffect(() => {
  dialogShow.value = mobileGlobal.seeting.dialogShow;
});

let authorizeExistList = ref(getAuthorizeExistList());
const switchAuthorize = (event, authrize) => {
  console.log('swith', event);
  if (event.detail.value == true) {
    enableAuhorizeScope(authrize);
  } else {
    disableAuhorizeScope(authrize);
  }
};

const getAuthorizeText = (authorrize) => {
  return authorizeList[authorrize];
};

const onBack = () => {
  mobileGlobal.seeting.dialogShow = false;
};

onUpdated(() => {
  console.log('onUpdated');
  authorizeExistList.value = getAuthorizeExistList();
});
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

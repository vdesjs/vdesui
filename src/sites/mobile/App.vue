<template>
  <top-bar></top-bar>
  <demo-nav></demo-nav>
  <!-- <div>app</div>
    <div>lang {{ lang }}</div>
    <div>langConfigs {{ langConfigs }}</div> -->
  <router-view />
  <modal-dialog></modal-dialog>
  <wx-loading></wx-loading>
  <wx-toast></wx-toast>
  <wx-action-sheet></wx-action-sheet>
  <wx-auth-dialog></wx-auth-dialog>
  <seeting></seeting>
</template>
<script lang="ts" setup>
import TopBar from './components/TopBar.vue';
import DemoNav from './components/DemoNav.vue';
import ModalDialog from './dialogs/ModalDialog.vue';
import WxLoading from './wxcomponets/WxLoading.vue';
import WxToast from './wxcomponets/WxToast.vue';
import WxActionSheet from './wxcomponets/WxActionSheet.vue';
import WxAuthDialog from './wxcomponets/WxAuthDialog.vue';
import Seeting from './wxcomponets/Seeting.vue';
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#app {
  .demo {
    overflow-y: scroll;
    height: calc(667px - 20px - 44px);

    > h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: #909ca4;
      padding: 0 10px;
      font-weight: 400;
    }
  }
}

// #app .demo > h2 {
//   margin-top: 30px;
//   margin-bottom: 10px;
//   font-size: 14px;
//   color: #909ca4;
//   padding: 0 10px;
//   font-weight: 400;
// }
</style>

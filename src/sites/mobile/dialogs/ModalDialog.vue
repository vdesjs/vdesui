<template>
  <vdes-dialog
    :show="mobileGlobal.modal.dialogShow"
    :title="mobileGlobal.modal.title"
    :buttons="buttons"
    @buttontap="tapDialogButton"
    @close="cleanDialog"
  >
    <vdes-view>
      {{ mobileGlobal.modal.content }}
    </vdes-view>
  </vdes-dialog>
</template>
<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from 'vue';
import { useGlobal } from '../store/global';

const { mobileGlobal } = useGlobal();

const buttons = computed(() => {
  const buttons: any[] = [];
  if (mobileGlobal.modal.showCancel) {
    buttons.push({
      text: mobileGlobal.modal.cancelText,
      extClass: 'cancelButton'
    });
  }
  buttons.push({
    text: mobileGlobal.modal.confirmText,
    extClass: 'confirmButton'
  });

  return buttons;
});

let cancelColor = ref(mobileGlobal.modal.cancelColor);
let confirmColor = ref(mobileGlobal.modal.confirmColor);
watchEffect(() => {
  cancelColor.value = mobileGlobal.modal.cancelColor;
  confirmColor.value = mobileGlobal.modal.confirmColor;
});

const tapDialogButton = (event) => {
  if (event.detail.item.text == mobileGlobal.modal.cancelText) {
    mobileGlobal.modal.dialogShow = false;
    mobileGlobal.modal.success?.({
      content: '',
      confirm: false,
      cancel: true
    });
  } else if (event.detail.item.text == mobileGlobal.modal.confirmText) {
    mobileGlobal.modal.dialogShow = false;
    mobileGlobal.modal.success?.({
      content: '',
      confirm: true,
      cancel: false
    });
  }
};

const cleanDialog = () => {
  mobileGlobal.modal = {
    dialogShow: false
  };
};
</script>

<style lang="scss">
.cancelButton {
  color: v-bind(cancelColor) !important;
}
.confirmButton {
  color: v-bind(confirmColor) !important;
}
</style>

<template>
  <div class="demo">
    <h2>基础使用</h2>
    <div>
        <vdes-form @submit="test">

            <vdes-button formType="submit" >提交</vdes-button>
            <vdes-button formType="reset" >重置</vdes-button>
            <vdes-input></vdes-input>
            
        </vdes-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTranslate } from '@/packages/utils/demo/use-translate';
const i18n = {
  'zh-CN': {
    basic: '基础使用'
  },
  'en-US': {
    basic: 'basicUse'
  }
};
const test = () => {
    console.log("test")
}
const t = useTranslate(i18n);
</script>

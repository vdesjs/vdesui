<template>
  <div class="index">
    <div class="index-header">
      <img src="../../doc/logo.svg" />
      <div class="info">
        <h1>{{ t('title') }}</h1>
        <p>{{ t('subTitle') }}</p>
      </div>
    </div>
    <div class="index-components">
      <ol v-for="nav in data.navs" :key="nav.name">
        <template v-if="nav.demoShow != false">
          <li>{{ nav.name }}</li>
          <ul>
            <template v-for="_package in nav.packages" :key="_package">
              <li>
                <router-link :to="getPathByName(_package.name.toLowerCase())">
                  {{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}
                </router-link>
                <img
                  class="right-arrow"
                  src="../../common/assets/images/right-arrow.svg"
                />
              </li>
            </template>
          </ul>
        </template>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from '@/vdesui.config';
import Locale from '@/packages/__VUE/locale';
import { useTranslate } from '@/packages/utils/demo/use-translate';
import { reactive, watch } from '@vue/runtime-core';

const i18n = {
  'zh-CN': {
    title: 'vdesui',
    subTitle: '轻量级小程序多端 Vue 组件库'
  },
  'en-US': {
    title: 'vdesui',
    subTitle: 'Lightweight small program multi-end Vue component library'
  }
};
const t = useTranslate(i18n);

const getPathByName = (name: string) => {
  return `/${Locale.getLang()}/${name}`;
};

const navs = config.locales[Locale.getLang()].navs;

const data = reactive({
  navs
});
watch(
  () => Locale.getLang(),
  () => {
    data.navs = config.locales[Locale.getLang()].navs;
  }
);
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  padding-top: 30px;

  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;
    > img {
      width: 67px;
      height: 67px;
      margin-right: 18px;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }
      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-components {
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    padding: 30px 25px;
    > ol {
      margin-bottom: 17px;
      > li {
        line-height: 20px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        margin-bottom: 10px;
      }
      > ul {
        li {
          display: flex;
          align-items: center;
          padding: 0 24px;
          width: 100%;
          height: 45px;
          line-height: 45px;
          background: rgba(255, 255, 255, 1);
          border-radius: 22px;
          box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.06);
          margin-bottom: 13px;
          .right-arrow {
            width: 14px;
            height: 14px;
          }
          a {
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: bold;
            display: block;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }
}
</style>

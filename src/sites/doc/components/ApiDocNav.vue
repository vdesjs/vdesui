<template>
  <div class="doc-nav">
    <collapse-item v-for="api in data.apis" :key="api.name" :title="api.name">
      <li
        :class="{ active: isActive(_package.path) }"
        v-for="_package in api.packages"
        :key="_package.path"
      >
        <router-link
          :to="replaceRoutePath(_package.path)"
          :class="{ active: isActive(_package.path) }"
        >
          {{ _package.name }}
        </router-link>
      </li>
    </collapse-item>
  </div>
</template>

<script lang="ts" setup>
import CollapseItem from './sub/CollapseItem.vue';
import Locale from '@/packages/__VUE/locale';
import config from '@/vdesui.config';
import { defineComponent, reactive, watch } from 'vue';
import { useActive } from '../compsables/active';
import {replaceRoutePath} from '../../common/index'

const apis = config.locales[Locale.getLang()].apis;

const data = reactive({
  apis
});

watch(
  () => Locale.getLang(),
  () => {
    data.apis = config.locales[Locale.getLang()].apis;
  }
);

const { isActive } = useActive();
</script>

<style lang="scss">
.doc {
  &-nav {
    position: fixed;
    top: $doc-header-height;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: #fff;
    width: 290px;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;
  }
}
</style>

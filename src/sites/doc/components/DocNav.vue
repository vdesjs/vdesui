<template>
  <div class="doc-nav">
    <collapse-item :title="data.docs.name">
      <li
        :class="{ active: isActive(_package.name) }"
        v-for="_package in data.docs.packages"
        :key="_package.name"
      >
        <router-link v-if="!_package.isLink" :to="_package.name.toLowerCase()">
          {{ _package.cName }}
        </router-link>
        <a v-else :href="_package.name" target="_blank">{{ _package.cName }}</a>
      </li>
    </collapse-item>

    <collapse-item v-for="nav in data.navs" :key="nav.name" :title="nav.name">
      <li
        :class="{ active: isActive(_package.name) }"
        v-for="_package in nav.packages"
        :key="_package.name"
      >
        <router-link
          :to="_package.name.toLowerCase()"
          :class="{ active: isActive(_package.name) }"
        >
          {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
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

const docs = config.locales[Locale.getLang()].docs;
const navs = config.locales[Locale.getLang()].navs;

const data = reactive({
  docs,
  navs
});

watch(
  () => Locale.getLang(),
  () => {
    data.docs = config.locales[Locale.getLang()].docs;
    data.navs = config.locales[Locale.getLang()].navs;
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

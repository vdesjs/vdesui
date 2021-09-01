<template>
  <div>
    <doc-header></doc-header>
    <doc-nav></doc-nav>
    <div class="doc-content">
      <div class="doc-content-document">
        <router-view />
      </div>
      <doc-demo-preview :url="data.demoUrl"></doc-demo-preview>
    </div>
  
  </div>
</template>

<script lang="ts" setup>
import DocHeader from '@/sites/doc/components/DocHeader.vue';
import DocNav from '../components/DocNav.vue';
import DocDemoPreview from '../components/DocDemoPreview.vue';
import { reactive } from '@vue/reactivity';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
import { defineComponent } from 'vue';

const data = reactive({
  demoUrl: 'demo.html'
});

const route = useRoute();
const watchDemoUrl = (toRoute: RouteLocationNormalized) => {
  const { origin, pathname } = window.location;
  console.log(pathname);
  const demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${
    toRoute.path
  }`;
  data.demoUrl = demoUrl;
  console.log(data.demoUrl);
};

onMounted(() => {
  watchDemoUrl(route)
})
onBeforeRouteUpdate((to) => {
  watchDemoUrl(to);
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    // flex-direction: column;
    padding-top: $doc-header-height;

    &-document {
      min-height: 800px;
    }
    &-tabs {
      position: absolute;
      right: 445px;
      top: 48px;
      display: flex;
      height: 50px;
      align-items: center;
      margin-bottom: 20px;
      z-index: 1;
      .tab-item {
        position: relative;
        padding: 10px 25px;
        height: 100%;
        cursor: pointer;
        font-size: 16px;
        color: #323232;
        text-align: center;
        border-radius: 4px;
        &.cur {
          color: #fa2c19;
          &:after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #fa2c19;
          }
        }
        &:hover {
          background-color: #f7f8fa;
        }
      }
    }
  }
}
</style>

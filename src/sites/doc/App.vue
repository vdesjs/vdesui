<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({

})
</script>
<style lang="scss">
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: $doc-header-height;
}

* {
  // box-sizing: border-box;
  // margin: 0;
  // padding: 0;
  // -webkit-user-select: none;
  // user-select: none;
  // -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  // overflow: hidden;
}
</style>
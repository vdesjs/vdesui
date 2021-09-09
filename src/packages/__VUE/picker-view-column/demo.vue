<template>
  <div class="demo">
    <h2>测试</h2>
    <div>

      <vdes-picker-view :value="[0]" @change="change" @pickstart="pickstart" @pickend="pickend">
        <vdes-picker-view-column >
          <vdes-view>ffffff</vdes-view>
          <vdes-view>aaaas</vdes-view>
          <vdes-view>dddd</vdes-view>
          <vdes-view>eeee</vdes-view>
          <vdes-view>fff</vdes-view>
          <vdes-view>yyyy</vdes-view>
          <vdes-view>aaetf</vdes-view>
          <vdes-view>tttttt</vdes-view>
        </vdes-picker-view-column>
        <vdes-picker-view-column>
          <vdes-view>aaaa</vdes-view>
          <vdes-view>aaaas</vdes-view>
          <vdes-view>dddd</vdes-view>
          <vdes-view>eeee</vdes-view>
          <vdes-view>aaaa</vdes-view>
          <vdes-view>yyyy</vdes-view>
          <vdes-view>aaetf</vdes-view>
          <vdes-view>tttttt</vdes-view>
        </vdes-picker-view-column>
      </vdes-picker-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
const change = (event) => {
  console.log(event);
};
const pickstart = () => {
  console.log("pick start")
}

const pickend = () => {
  console.log("pick end")
}
</script>

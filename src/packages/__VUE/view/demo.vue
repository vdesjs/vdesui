<template>
  <div class="demo">
    <h2
      >flex-direction: row<br />
      横向布局</h2
    >
    <div>
      <vdes-view class="flex-wrp" style="flex-direction: row">
        <vdes-view
          hover-class="fffff"
          class="flex-item demo-text-1"
        ></vdes-view>
        <vdes-view class="flex-item demo-text-2"></vdes-view>
        <vdes-view class="flex-item demo-text-3"></vdes-view>
      </vdes-view>
    </div>
    <h2>flex-direction: column<br />纵向布局</h2>
    <div>
      <vdes-view class="flex-wrp" style="flex-direction: column">
        <vdes-view class="flex-item flex-item-V demo-text-1"></vdes-view>
        <vdes-view class="flex-item flex-item-V demo-text-2"></vdes-view>
        <vdes-view class="flex-item flex-item-V demo-text-3"></vdes-view>
      </vdes-view>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style>
.flex-wrp {
  margin-top: 60rpx;
  display: flex;
}
.flex-item {
  width: 200rpx;
  height: 300rpx;
  font-size: 26rpx;
}
.flex-item-V {
  margin: 0 auto;
  width: 300rpx;
  height: 200rpx;
}
.demo-text-1 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1aad19;
  color: #ffffff;
  font-size: 36rpx;
}
.demo-text-1:before {
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782d7;
  color: #ffffff;
  font-size: 36rpx;
}
.demo-text-2:before {
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3 {
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #353535;
  font-size: 36rpx;
}
.demo-text-3:before {
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

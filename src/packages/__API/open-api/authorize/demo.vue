<template>
  <div class="demo">
    <h2> 获取权限 </h2>
    <div>
      <vdes-button @tap="userProfile">获取用户信息</vdes-button>
      <vdes-button @tap="userLocation">获取地理位置</vdes-button>
      <vdes-button @tap="userLocationBackground">获取后台地理位置</vdes-button>
      <vdes-button @tap="weRun">获取你的微信步数</vdes-button>
      <vdes-button @tap="record">录音功能</vdes-button>
      <vdes-button @tap="writePhotosAlbum">保存到相册</vdes-button>
      <vdes-button @tap="camera">摄像头</vdes-button>
    </div>
  </div>
</template>
<script lang="tsx" setup>
import vdes from '../..';

const userProfile = () => {
  vdes.getUserProfile({
      success() {
          console.log("获取到用户信息")
      }
  });
};

const userLocation = () => {
  vdes.authorize({
    scope: 'scope.userLocation',
    success() {
      console.log('成功获取scope.userLocation权限');
    }
  });
};

const userLocationBackground = () => {
  vdes.authorize({
    scope: 'scope.userLocationBackground',
    success() {

    }
  })
}
const weRun = () => {
  vdes.authorize({
    scope: 'scope.werun',
    success() {
      
    }

  })
}

const record = () => {
  vdes.authorize({
    scope: 'scope.record',
    success() {

    }
  })
}

const writePhotosAlbum = () => {
  vdes.authorize({
    scope: 'scope.writePhotosAlbum',
    success() {

    }
  })
}

const camera = () => {
  vdes.authorize({
    scope: 'scope.camera'
  })
}
</script> 

<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title">{{ t('title') }}</div>
        <div class="content-smile"> </div>
        <div class="content-subTitle">{{ t('subTitle') }}</div>
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">{{ t('leftButtonText') }}</div>
          </div>
          <div class="rightButton">
            <div class="rightButtonText">{{ t('rightButtonText') }}</div>

            <div class="qrcodepart">
              <div class="qrcode-text">{{ t('qrcodeText') }}</div>
              <div class="qrcode"> </div>
            </div>
          </div>
          <iframe
            style="margin-left: 20px"
            src="https://ghbtns.com/github-btn.html?user=vdesjs&repo=vdesui&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <doc-footer></doc-footer>
  <!-- main -->
</template>

<script setup lang="ts">
import { useTranslate } from '@/packages/utils/demo/use-translate';
import Locale from '@/packages/__VUE/locale';
import DocHeader from '@/sites/doc/components/DocHeader.vue';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useTheme } from '../compsables/theme';
import DocFooter from '@/sites/doc/components/DocFooter.vue';
const { themeColor } = useTheme();
const themeName = computed(() => {
  return `doc-content-${themeColor.value}`;
});

const i18n = {
  'zh-CN': {
    title: 'vdesui',
    subTitle: '轻量级小程序多端 Vue 组件库',
    leftButtonText: '开始使用',
    rightButtonText: '扫码体验',
    qrcodeText: '请使用手机扫码体验'
  },
  'en-US': {
    title: 'vdesui',
    subTitle: 'english',
    leftButtonText: 'english',
    rightButtonText: 'english',
    qrcodeText: 'english'
  }
};
const t = useTranslate(i18n);

const router = useRouter();
const toIntro = () => {
  const lang = Locale.getLang();
  router.push(`/${lang}/intro`);
};
</script>

<style lang="scss">
.doc-content {
  &-white {
    background-color: #ffffff;
    .content-title {
      color: $theme-white-word;
    }
    .content-subTitle {
      color: $theme-white-word;
    }
  }
  &-black {
    background-color: $theme-black-select-bg;
    .content-title {
      color: $theme-black-input;
    }
    .content-subTitle {
      color: $theme-black-input;
    }
  }
}
.doc-content-index {
  display: flex;
  height: 100vh;

  min-width: 1200px;
  .content-left {
    background: url(../../common/assets/images/main-right.png)  no-repeat;
    background-size: 1126px 568px;
    background-position-x: 500px;
    background-position-y: 150px;

    padding: 15% 0 0 8.8%;
    flex: 1;
    min-width: 550px;
    .content-title {
      // line-height: 36px;
      font-size: 42px;
    }
    .content-smile {
      margin-top: 10px;
      width: 44px;
      height: 3px;
      background-color: $theme-white-actice;
    }
    .content-subTitle {
      margin-top: 12px;
      font-size: 20px;
    }
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      iframe {
        align-self: center;
      }
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
        }
        width: 150px;
        height: 40px;
        background: linear-gradient(
          135deg,
          rgb(25, 77, 250) 0%,
          rgb(39, 78, 250) 45%,
          rgb(31, 162, 250) 83%,
          rgb(25, 242, 250) 100%
        );
        
        border-radius: 29px;
        cursor: pointer;
        &:hover {
          background: linear-gradient(
            135deg,
            rgb(25, 77, 250) 0%,
            rgb(39, 78, 250) 45%,
            rgb(126, 31, 250) 83%,
            rgb(205, 25, 250) 100%
          );
        }
      }
      .rightButton {
        display: flex;
        position: relative;
        .rightButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgb(25, 77, 250);
        }
        margin-left: 26px;
        width: 150px;
        height: 40px;
        border: 1px solid rgb(25, 77, 250);
        border-radius: 29px;
        background-color: #ffffff;
        cursor: pointer;
        &:hover {
          border: 1px solid rgb(126, 31, 250);
          .qrcodepart {
            display: block;
          }
        }
      }
      .qrcodepart {
        display: none;
        position: absolute;
        right: -10px;
        top: 50px;
        padding: 4px;
        width: 166px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
        .qrcode-text {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          // background: url(https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png)
          //   no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>

<template>
  <div class="doc-header" :class="themeName">
    <div class="header-logo">
      <a class="logo-link" @click="toHome"></a>
      <span class="name">
        vdesui
        <span class="version">v{{ version }}</span>
      </span>

      <span class="logo-border"></span>
    </div>
    <div class="header-nav">
      <search></search>
      <div class="nav-box">
        <ul class="nav-list">
          <li
            class="nav-item"
            v-for="item in data.header"
            :key="item.cName"
            :class="{ active: isActive(item.name) }"
          >
            <!-- <router-link :to="item.path">
                {{ item.cName }}
            </router-link> -->
            <a @click="jumpLink(item.path)">
              {{ item.cName }}
            </a>
          </li>
          <li lass="nav-item">
            <div
              @focus="handleFocus"
              @focusout="handleFocusOut"
              tabindex="0"
              class="header-select-box"
              @click.stop="data.isShowSelect = !data.isShowSelect"
              :class="[data.isShowSelect == true ? 'select-up' : 'select-down']"
            >
              <div class="header-select-hd"
                >{{ data.version }}<i class=""></i
              ></div>
              <transition name="fade">
                <div class="header-select-bd" v-show="data.isShowSelect">
                  <div
                    class="header-select-item"
                    v-for="(item, index) in versions"
                    :key="index"
                    @click.stop="checkVersion(item)"
                    :class="{ active: data.activeIndex === index }"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="user-link github"
              target="_blank"
              href="https://github.com/vdesjs/vdesui"
            >
              <!-- <img src="#" /> -->
            </a>
            <a
              class="user-link gitee"
              target="_blank"
              href="https://gitee.com/vdesjs/vdesui"
            >
              <!-- <img src="../../common/assets/images/gitee.svg" /> -->
            </a>
            <a class="theme" @click="changeTheme">
              {{ t(themeColor) }}
            </a>
            <a
              class="language"
              v-for="langObj in data.langLabels"
              @click="changeLanguage(langObj.lang)"
              :key="langObj.lang"
              :class="{ active: langObj.check }"
            >
              {{ langObj.langLabel }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect
} from 'vue';
import { version } from '@/../package.json';
import Search from './Search.vue';
import config from '@/vdesui.config';
import Locale from '@/packages/__VUE/locale';
import { useTheme } from '../compsables/theme';
import { useRoute, useRouter } from 'vue-router';
import { Versions } from '@/packages/config';
import { useTranslate } from '@/packages/utils/demo/use-translate';
import { useActive } from '../compsables/active';

let packages = [];

let langLabels = Object.keys(config.locales).map((lang) => {
  return {
    check: Locale.getLang() == lang,
    lang,
    langLabel: config.locales[lang].langLabel
  };
});

const i18n = {
  'zh-CN': {
    white: '浅色',
    black: '深色'
  },
  'en-US': {
    white: 'light',
    black: 'dart'
  }
};
const t = useTranslate(i18n);

const data = reactive({
  theme: 'block',
  version: '1.x',
  navIndex: 0,
  activeIndex: 0,
  isShowSelect: false,
  header: config.locales[Locale.getLang()].header,
  langLabels
});

const navs = config.locales[Locale.getLang()].navs;
// let header = config.locales[Locale.getLang()].header;

watch(
  () => Locale.getLang(),
  () => {
    data.header = config.locales[Locale.getLang()].header;
    data.langLabels = Object.keys(config.locales).map((lang) => {
      return {
        check: Locale.getLang() == lang,
        lang,
        langLabel: config.locales[lang].langLabel
      };
    });
  }
);

navs.forEach((item) => {
  packages.push(...item.packages);
});

const versions = config.site.versions;

const handleFocus = () => {
  console.log(1);
};
const handleFocusOut = () => {
  data.isShowSelect = false;
};

const router = useRouter();
const toHome = () => {
  console.log('toHome');
  router.push('/');
};

const { themeColor, toggleTheme } = useTheme();
const themeName = computed(() => {
  return `doc-header-${themeColor.value}`;
});
const changeTheme = () => {
  console.log('change');
  toggleTheme();
};

const { isActive } = useActive();

const jumpLink = (path: string) => {
  const lang = Locale.getLang();
  router.push(`/${lang}/${path}`);
};

const checkVersion = (version: Versions) => {
  window.location.href = version.link;
};

const route = useRoute();
const changeLanguage = (lang: string) => {
  Locale.use(lang);

  console.log(route);
  let currentPath = route.path;
  currentPath = currentPath.replace(currentPath.split('/')[1], lang);
  router.replace(currentPath);

  // iframe 通信
  nextTick(() => {
    const iframe: HTMLIFrameElement = document.querySelector(
      'iframe'
    ) as HTMLIFrameElement;
    console.log(iframe);
    iframe.contentWindow?.postMessage({type: 'changeLang', value: lang}, '*')
    
  });
};
</script>
<style lang="scss">
.doc-header {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  // min-width: 1300px;
  height: $doc-header-height;
  line-height: $doc-header-height;
  padding: 0 50px;

  &-white {
    background: #fff;
    color: $theme-white-word;
    border-bottom: 1px solid $theme-white-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('../logo.svg') no-repeat center/100%;
        }
        .logo-border {
          background: $theme-white-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-white-word;
            background-position: 0 -22px;
            border: 1px solid $theme-white-input;
            &::-webkit-input-placeholder {
              color: $theme-white-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-white-word;
            a {
              color: $theme-white-word;
            }
            &.active {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-white-actice;
              }
            }
            .user-link {
              &.github {
                background-image: url('../../common/assets/images/github.svg');
              }
              &.gitee {
                background-image: url('../../common/assets/images/gitee.svg');
              }
            }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../common/assets/images/icon-select-gray-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../common/assets/images/icon-select-gray-up.png');
          }
        }
      }
      &-hd {
        color: $theme-white-select-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-white-select-border;
        background-color: $theme-white-select-bg;
        &:hover {
          color: $theme-white-actice;
        }
      }
    }
  }
  &-black {
    background: #000;
    color: $theme-black-word;
    border-bottom: 1px solid $theme-black-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('../logo.svg') no-repeat center/100%;
        }
        .logo-border {
          background: $theme-black-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-black-word;
            background-position: 0 -44px;
            &::-webkit-input-placeholder {
              color: $theme-black-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-black-word;
            a {
              color: $theme-black-word;
            }
            &.active {
              color: $theme-black-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-black-actice;
              }
            }
            .user-link {
              &.github {
                background-image: url('../../common/assets/images/github-black.svg');
              }
              &.gitee {
                background-image: url('../../common/assets/images/gitee-black.svg');
              }
            }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../common/assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../common/assets/images/icon-select-white-up.png');
          }
        }
      }
      &-hd {
        color: $theme-black-select-word;
        background-color: $theme-black-select-bg;
        border: 1px solid $theme-black-select-border;
      }
      &-bd {
        color: $theme-black-select-word;
      }
      &-item {
        background-color: $theme-black-select-bg;
        border-color: $theme-black-select-bg;
        &:hover {
          background-color: $theme-black-select-hover;
          border-color: $theme-black-select-hover;
        }
      }
    }
  }
}
.header-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 180px;
  width: 180px;
  height: 64px;
  .logo-link {
    width: 45px;
    height: 45px;
    cursor: pointer;
  }
  .name {
    font-size: 18px;
    .version {
      font-size: 12px;
    }
  }
  .logo-border {
    // right: 1px;
    width: 1px;
    height: 26px;
  }
}
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 240px);
  // min-width: 900px;
  padding: 0 40px;
  .nav-box {
    margin-right: 140px;
    .nav-list {
      min-width: 545px;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-around;
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        // height: 63px;
        // line-height: 63px;
        text-align: center;
        cursor: pointer;

        &.active {
          font-weight: bold;
          &:after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 3px;
            left: 0;
            background-color: $theme-white-actice;
          }
        }
      }
    }

    .user-link {
      display: inline-block;
      width: 26px;
      height: 26px;
      vertical-align: middle;
      background-size: 26px;
      margin-right: 10px;
      transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        transform: scale(1.2);
      }
    }
    .theme {
      margin-right: 20px;
      margin-left: 10px;
      padding: 0 12px;
    }
    .language {
      margin-right: 10px;
      padding: 0 12px;
      color: #001938;
      // background: #f7f8fa;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      border: 1px solid rgba(32, 101, 179, 0.7);
      border-radius: 20px;
      cursor: pointer;
      &.active {
        border: 3px solid rgba(32, 101, 179, 0.7);
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
    margin-right: 10px;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-white-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -60px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 120px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
</style>

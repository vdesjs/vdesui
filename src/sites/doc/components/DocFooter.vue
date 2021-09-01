<template>
  <div class="doc-footer" :class="themeName">
    <div class="doc-footer-content">
      <div class="doc-footer-list">
        <img src="../logo.svg" alt="" />
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关资源</h4>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://vuejs.org">Vue</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://vitejs.dev"
            >Vite</a
          >
        </div>
        <div class="doc-footer-item"
          ><a
            class="sub-link"
            target="_blank"
            href="https://github.com/vdesjs/vdes-template"
            >vdes-template</a
          >
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://github.com/vdesjs/vdesui"
            >vdesjs</a
          >
        </div>
      </div>

      <div class="doc-footer-list">
        <h4 class="doc-footer-title">社区</h4>
        <div class="doc-footer-item"
          ><a
            class="sub-link"
            target="_blank"
            href="https://github.com/vdesjs/vdesui"
            >GitHub</a
          ></div
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '../compsables/theme';

const { themeColor } = useTheme();
const themeName = computed(() => {
  return `doc-footer-${themeColor.value}`;
});
</script>
<style lang="scss">
.doc-footer {
  padding: 30px 80px 20px;
  text-align: center;
  &-content {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &-list {
    position: relative;
    &:first-child {
      margin-right: 65px;
    }
  }
  &-logo {
    margin-top: 8px;
  }
  &-title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
  &-item {
    margin-bottom: 14px;
    line-height: 17px;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    .sub-link {
      // cursor: pointer;
    }
  }
}

// 颜色
.doc-footer {

  // 黑色
  &-black {
    background: $theme-black-footer-bg;
    border-top: 1px solid $theme-black-footer-border;
    .doc-footer {
      &-title {
        color: $theme-black-footer-word1;
      }
      &-item {
        color: $theme-black-footer-word2;
        .sub-link {
          color: $theme-black-footer-word2;
        }
      }
      &-desc {
        color: $theme-black-footer-word4;
      }
      &-select-hd {
        color: $theme-black-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        &:hover {
          color: $theme-black-footer-hover;
        }
      }
      &-select-item {
        color: $theme-black-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        .circle-red {
          // background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-theme-border;
        }
        .circle-white {
          background: $theme-white-circle;
        }
        &:hover {
          background-color: $theme-black-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          background-color: $theme-black-footer-hover;
          border-color: $theme-black-footer-hover;
          .circle-red {
            // border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-footer-bg;
          }
        }
      }
    }
  }
  // 白色
  &-white {
    background: $theme-white-footer-bg;
    border-top: 1px solid $theme-white-footer-border;
    .doc-footer {
      &-title {
        color: $theme-white-footer-word1;
      }
      &-item {
        color: $theme-white-footer-word2;
        .sub-link {
          color: $theme-white-footer-word2;
        }
      }
      &-desc {
        color: $theme-white-footer-word4;
      }
      &-select-hd {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        &:hover {
          color: $theme-white-footer-hover;
        }
      }
      &-select-item {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        .circle-red {
          // background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-circle;
        }
        .circle-white {
          background: $theme-white-circle;
          border: 1px solid $theme-white-circle-border;
        }
        &:hover {
          color: $theme-white-footer-word3;
          background-color: $theme-white-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          color: $theme-white;
          background-color: $theme-white-footer-hover;
          border-color: $theme-white-footer-hover;
          .circle-red {
            // border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-circle;
          }
          .circle-white {
            border-color: $theme-white-circle;
          }
        }
      }
    }
  }
}
</style>

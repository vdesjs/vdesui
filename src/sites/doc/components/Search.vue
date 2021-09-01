<template>
  <div class="search-box">
    <input
      type="text"
      class="search-input"
      placeholder="在 vdesui 中搜索"
      v-model="data.searchVal"
      @focus="onfocus"
      @blur="onblur"
      @keyup="choseList"
    />
    <ul class="search-list" v-show="data.searchList.length > 0">
      <li
        @click="checklist"
        v-for="(item, index) in data.searchList"
        :key="index"
      >
        <router-link :to="item.name.toLowerCase()">
          {{ item.name }}
          <span>{{ item.cName }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from '@vue/runtime-core';
import config from '@/vdesui.config';
import { PackagesOption } from '@/packages/config';
import Locale from '@/packages/__VUE/locale';
import {  useRouter } from 'vue-router';

export default defineComponent({
  name: 'search',
  setup() {
    const navs = config.locales[Locale.getLang()].navs;
    const navList: PackagesOption[] = [];
    const searchList: PackagesOption[] = [];
    const data = reactive({
      navs,
      navList,
      searchIndex: 0,
      searchList,
      searchVal: '',
      searchCName: '',
      searchCurName: ''
    });
    onMounted(() => {
      navs.forEach((item) => {
        item.packages.forEach((value) => {
          data.navList.push(value);
        });
      });
    });
    watch(
      () => data.searchVal,
      (searchVal) => {
        if (searchVal) {
          data.searchList = data.navList.filter((item) => {
            if (item.show === false) return false;
            const rx = new RegExp(searchVal, 'gi');
            return rx.test(item.name + item.cName + item.desc);
          });
        } else {
          data.searchCName = '';
          data.searchIndex = 0;
          data.searchList = [];
        }
      }
    );
    const onfocus = (e: Event) => {};
    const onblur = (e: Event) => {
      setTimeout(() => {
        data.searchList = [];
        data.searchVal = '';
      }, 200);
    };
    const checklist = () => {
      data.searchVal = '';
      data.searchCurName = '';
      data.searchIndex = 0;
    };
    const router = useRouter()
    const choseList = (e: KeyboardEvent) => {
      let searchIndex = data.searchIndex;
      if (e.key == "ArrowDown") {
        searchIndex++;
      }
      if (e.key == "ArrowUp") {
        searchIndex--;
      }
      if (searchIndex < 0) {
        searchIndex = 0;
      }
      const searchList = data.searchList;
      if (searchList.length > 0) {
        const cName = searchList[searchIndex] && searchList[searchIndex].name;
        if (cName) {
          data.searchCurName = cName;
          data.searchIndex = searchIndex;
          if (e.key == "Enter") {
            router.push({
              path: '/' + searchList[searchIndex].name
            });
            data.searchCurName = '';
            data.searchIndex = 0;
            data.searchVal = '';
          }
        }
      }
    };

    return {
      onfocus,
      onblur,
      data,
      checklist,
      choseList
    };
  }
});
</script>
<style lang="scss">
.search-box {
  position: relative;
  // min-width: 300px;
  height: 22px;
  line-height: 22px;
  .search-input {
    height: 22px;
    padding-left: 42px;
    font-size: 14px;
    vertical-align: middle;
    background-color: transparent;
    background-image: url('../../common/assets/images/input-search.png');
    background-repeat: no-repeat;
    font-size: 14px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
}
.search-list {
  background: #fff;
  position: absolute;
  width: 300px;
  list-style: none;
  border: 1px solid #f2f2f2;
  z-index: 99999;
  top: 27px;
  padding: 0;
  li {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding-left: 40px;
      text-decoration: none;
      color: #666;
    }
    &:hover {
      // background: #6096ff;
      color: #fa2c19;
      a {
        color: #fa2c19;
      }
    }
  }
  .cur {
    background: #fa2c19;
    color: #fff;
    &:hover {
      color: #fff;
      font-weight: bold;
      a {
        color: #fff;
      }
    }
    a {
      color: #fff;
    }
  }
}
</style>

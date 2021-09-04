<template>
    <div class="demo">
        <h2>{{t('type')}}</h2>
        <div>
            <vdes-button class="custom-button" hover-class="hoverClass" @longpress="longpress" @tap="tap">ff</vdes-button>
            <vdes-button size="mini">asd</vdes-button>
        </div>

        <h2>{{t('openType')}}</h2>
        <div>
            <vdes-button class="button" open-type="concact">打开客服会话</vdes-button>
            <vdes-button class="button" open-type="share">分享</vdes-button>
            <vdes-button class="button" type="primary" open-type="getPhoneNumber" @getphonenumber="phoneNumber">获取手机号</vdes-button>
            <vdes-button class="button" open-type="launchApp">打开app</vdes-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "@/packages/utils/create";
import { useTranslate } from "@/packages/utils/demo/use-translate";
import { defineComponent } from "@vue/runtime-core";
import VdesButton from "./index.vue"
const i18n = {
    'zh-CN': {
        type: '按钮类型',
        openType: '开放能力'
    },
    'en-US': {
        type: 'Button type',
        openType: 'open ability'
    }
}

const t  = useTranslate(i18n)

const longpress = (event: any) => {
    console.log(event)
    console.log('long press')
}
const tap = (event: any) => {
    console.log('tap press')
}

const phoneNumber = (event) => {
    console.log("event.detail",event.detail)
}

</script>
<style>
.custom-button {
    background-color: blue;
    color: white;
}
.button{
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
.hoverClass {
    background-color: #6200ff;
}
</style>
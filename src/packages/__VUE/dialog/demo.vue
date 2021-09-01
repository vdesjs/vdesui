<template>
    <div class="demo">
        <h2>对话框</h2>
        <div>
            <div>
                <vdes-button @tap="openConfirm" >确认取消按钮</vdes-button>

            </div>
            <div>
                <vdes-dialog :show="dialogShow" title="弹窗标题" :buttons="[{text: '取消'}, {text: '确定'}]" @buttontap="tapDialogButton" @close="dialogShow = false">
                    <vdes-view>
                        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
                    </vdes-view>
                </vdes-dialog>
            </div>

        </div>

    </div>

</template>
<script lang="ts" setup>
import { useTranslate } from "@/packages/utils/demo/use-translate";
import { ref } from "vue";
const i18n = {
    "zh-CN": {

    },
    "en-US": {

    }

}
const t = useTranslate(i18n)

const dialogShow = ref(false)
const openConfirm = () => {
    dialogShow.value = true
}

const tapDialogButton = (event) => {
    if (event.detail.index == 0) {
        dialogShow.value = false
    } else if (event.detail.index == 1) {
        dialogShow.value = false
    }
}

</script>
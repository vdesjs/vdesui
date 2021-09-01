<template>
    <div class="demo">
        <h2>
            vdes.showModal
        </h2>
        <div>
            <vdes-button @tap="showModal">显示消息提示框</vdes-button>
        </div>
        <h2>
            vdes.showLoading
        </h2>
        <div>
            <vdes-button @tap="showLoading">显示loading</vdes-button>
        </div>
        <h2>
            vdes.showToast
        </h2>
        <div>
            <vdes-button @tap="showToast">显示toast</vdes-button>
        </div>
        <h2>
            vdes.showActionSheet
        </h2>
        <div>
            <vdes-button @tap="showActionSheet">显示actionSheet</vdes-button>
        </div>

    </div>

</template>
<script lang="ts" setup>
import vdes from "../..";


const showModal = () => {
    vdes.showModal({
        title: '标题',
        content: '内容aaaa',
    })
}
const showLoading = () => {
    console.log("showLoading")
    vdes.showLoading({
        title: '标题文字'
    })
    setTimeout(() =>{
        vdes.hideLoading()
    }, 2000)
}

const showToast = () => {
    vdes.showToast({
        title: 'toast标题文字',
        icon: 'success'
    })
     setTimeout(() =>{
        vdes.hideToast()
    }, 2000)
}

const showActionSheet = () => {
    vdes.showActionSheet({
        itemList: ['aaa', 'bbb'],
        success(obj) {
            console.log(obj.tapIndex)
        }

    })
}
</script>
<template>
    <div class="demo">
        <h2>测试</h2>
        <div>
            <vdes-button @click="getUserinfo">获取用户信息</vdes-button>

        </div>
    </div>
</template>

<script lang="ts" setup>
import vdes from "../..";


const getUserinfo = () => {
    vdes.getUserProfile({
        desc: "用于用户注册",
        success(res) {
            console.log("getUserProfile", res)
        }
    })
}

</script>
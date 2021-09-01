<template>
    <div class="demo">
        <h2>setNavigationBarTitle</h2>
        <div>
            <vdes-button @tap="setNavigationBarTitle">改变导航栏标题</vdes-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import vdes from "../..";

const setNavigationBarTitle = () => {
    vdes.setNavigationBarTitle({
        title: 'hello vdes'
    })
}
</script>
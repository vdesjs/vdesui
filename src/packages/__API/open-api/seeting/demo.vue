<template>
  <div class="demo">
    <h2>openSetting</h2>
    <div>
      <vdes-button @tap="oepnSeeting">打开opensetting</vdes-button>

    </div>
  </div>

</template>
<script lang="ts" setup>
import vdes from "../..";


const oepnSeeting = () => {
  vdes.openSetting({

  })
}

</script>
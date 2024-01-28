<template>
  <div class="child-wrap">
    {{ title }}
    姓：{{ info.firstName }}
    <br>
    名：{{ info.lastName }}


  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
const title = ref("computed相关")
const info = reactive({
  title: "computed",
  firstName: "张",
  lastName: "三",
})

</script>
<style lang="" scoped></style>
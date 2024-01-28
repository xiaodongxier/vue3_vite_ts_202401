<template>
  <div class="child-wrap">
    {{ title }}



  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
const title = ref("computed相关")
const info = reactive({
  title: "computed"
})

</script>
<style lang="" scoped></style>
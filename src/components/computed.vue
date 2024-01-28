<template>
  <div class="child-wrap">
    {{ info.title }}



  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const info = reactive({
  title: "computed"
})

</script>
<style lang="" scoped></style>
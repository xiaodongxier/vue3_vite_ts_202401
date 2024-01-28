<template>
  <div class="child-wrap">
    <h3>{{title}}</h3>
    求和：{{ sum }}
    <br>
    <button @click="sum++">点击</button>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref("watch相关")
const sum = ref(0);


</script>
<style lang="" scoped></style>
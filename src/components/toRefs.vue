<template>
  <div class="child-wrap">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const name = "toRefs";
const n = ref(0);
console.log(n.value);
</script>
<style lang="" scoped>
</style>
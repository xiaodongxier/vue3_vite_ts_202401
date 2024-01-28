<template>
  <div class="child-wrap">
    title: {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const name = "toRefs";
const n = ref(0);
const info = reactive({
  name: '张三',
  age: 18,
  job: {
    j1: {
      salary: 20
    }
  }
})
console.log(n.value);

</script>
<style lang="" scoped>
</style>
<template>
  <div>
    {{ name.name }}-{{ name.age }}



  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let name = {
  name: '张三',
  age: 18
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
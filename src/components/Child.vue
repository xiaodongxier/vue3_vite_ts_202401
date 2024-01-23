<template>
  <div>
    {{ name.name }}-{{ name.age }}
    <button @click="handleClick">切换</button>


  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
let name = ref({
  name: '张三',
  age: 18
})

console.log(name)

function handleClick() {
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
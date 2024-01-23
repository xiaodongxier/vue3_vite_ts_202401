<template>
  <div>
    {{ name.name }}-{{ name.age }}
    <button @click="handleClick">切换</button>


  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let name = reactive({
  name: '张三',
  age: 18
})

console.log(name)

function handleClick() {
  name.age += 20
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
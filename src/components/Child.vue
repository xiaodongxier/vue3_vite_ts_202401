<template>
  <div>
    {{ mydata.name }}-{{ mydata.age }}
    <button @click="handleClick">切换</button>


  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
let mydata = ref({
  name: '张三',
  age: 18
})

console.log(mydata.value)

function handleClick() {
  mydata.value.age  += 20
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
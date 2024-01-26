<!--
 * @Date: 2024-01-23 22:52:45
 * @LastEditTime: 2024-01-26 09:25:28
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="child">
    {{ mydata.name }}-{{ mydata.age }}
    <button @click="handleClick">切换</button>
    <hr>
    {{ mydata.a.b.c }}
    <button @click="handleClickC">切换</button>


  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
let mydata = ref({
  name: '张三',
  age: 18,
  a: {
    b: {
      c: 9999999
    }
  }
})

console.log(mydata.value)

function handleClick() {
  mydata.value.age  += 20
}

function handleClickC(){
  mydata.value.a.b.c += 100
}
</script>
<style  scoped>
.child {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
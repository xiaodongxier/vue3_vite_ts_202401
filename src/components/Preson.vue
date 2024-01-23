<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-23 22:35:44
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="Preson">
    {{name}} - {{ age }} -- {{ hha }}
    <button @click="handleClick">点击</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Preson111',
  // setup(){
  //   let name = "张三";
  //   let age = 18;
    // function handleClick(){
    //   age += 1  // 没有生效, 因为这个时候数据不是响应式的
    //   console.log('点击了', age);  
    // }
  //   return {name, age}
  // }
}
</script>

<script setup lang="ts" name=""ww222>
let name = "张三";
let age = 18;
function handleClick(){
    age += 1
  console.log('点击了', age);  
}
</script>


<style scoped>
.Preson {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
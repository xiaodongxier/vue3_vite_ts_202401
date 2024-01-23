<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-23 22:43:55
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="Preson">
    {{name}} - {{ age }} -- {{ hha }}
    <button @click="handleClick">点击</button>
  </div>
</template>


<script setup lang="ts" name="Preson">
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
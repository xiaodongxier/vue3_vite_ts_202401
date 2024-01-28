<!--
 * @Date: 2024-01-28 17:58:58
 * @LastEditTime: 2024-01-28 21:36:00
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="child-wrap">
    <h3>{{title}}</h3>
    求和：{{ sum }}
    <br>
    <button @click="handleClick">点击</button>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref("watch相关")
const sum = ref(0);
function handleClick(){
  sum += 1
}

</script>
<style lang="" scoped></style>
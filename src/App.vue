<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-17 23:43:51
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="parent">
    这是父组件
    <Child></Child>
  </div>

</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import Child from './views/AboutView.vue';

</script>


<style>
.parent {
  border: 5px solid red;
}
</style>
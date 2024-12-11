<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-11 22:56:34
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="wrap">
    {{ name }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'Hello World',
    };
  }
}
</script>

<style>
.wrap {
  background: red;
}
</style>
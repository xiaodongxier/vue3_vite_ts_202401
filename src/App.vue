<!--
 * @Date: 2024-01-22 23:20:17
 * @LastEditTime: 2024-01-23 21:50:13
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="app">
    APP
    <Preson />
  </div>
</template>

<script lang="ts">
import Preson from './components/Preson.vue';

export default {
  name: 'test',
  components: {
    Preson
  },
  data() {
    return {
      description: '项目信息'




    }
  }
}
</script>
<style scoped>
.app {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
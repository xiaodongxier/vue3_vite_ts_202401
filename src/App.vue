<!--
 * @Date: 2024-01-22 23:20:17
 * @LastEditTime: 2024-01-26 09:23:52
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="app">
    <Preson />
    <Child />
  </div>
</template>

<script lang="ts">
import Preson from './components/Preson.vue';
import Child from './components/Child.vue';

export default {
  name: 'test',
  components: {
    Preson,
    Child
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
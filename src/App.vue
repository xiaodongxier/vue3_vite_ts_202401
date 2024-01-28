<!--
 * @Date: 2024-01-22 23:20:17
 * @LastEditTime: 2024-01-28 15:43:28
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="app">
    <Preson />
    <Child />
    <toRefs />
    <computed/>
    <watch/>
  </div>
</template>

<script lang="ts">
import Preson from './components/Preson.vue';
import Child from './components/Child.vue';
import toRefs from './components/toRefs.vue';
import computed from './components/computed.vue';
import watch from './components/watch.vue';

export default {
  name: 'test',
  components: {
    Preson,
    Child,
    toRefs,
    computed,
    watch
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

<style>

.child-wrap {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
}
h3 {
  margin: 0;
  background: #0a0000;
}
</style>
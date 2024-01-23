<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-23 21:52:42
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="Preson">
    {{name}} - {{ age }}
    <button @click="handleClick">点击</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Preson',
  data() {
    return {
      description: 'Preson',
      name:'张三',
      age:18
    }
  },
  methods: {
    handleClick(){
      this.age += 1
    }
  }
}
</script>

<style scoped>
.Preson {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-23 22:19:53
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
  name: 'Preson',
  data() {
    return {
      description: 'Preson',
      name:'张三',
      age:18,
      hha: this.name
    }
  },
  methods: {
    handleClick(){
      this.age += 1
    }
  },
  setup(){
    let name = "张三";
    let age = 18;
    function handleClick(){
      age += 1  // 没有生效, 因为这个时候数据不是响应式的
      console.log('点击了', age);  
    }
    return {name, age}
    // return () => "2024"
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
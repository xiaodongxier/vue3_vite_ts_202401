<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-12 13:32:17
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="wrap">
    {{ name }}
  </div>
  <button @click="setNsme">setNsme</button>
</template>

<script lang="ts">
export default {
  // data() {
  //   return {
  //     name: 'Hello World',
  //   };
  // },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount');
  // },
  // setup() {
  //   console.log('setup');
  //   let name = 'Hello World';
  //   function setNsme() {
  //     console.log('name1', name);
  //     name = 'Hello Vue3';
  //     console.log('name2', name);
  //   }
  //   return {name,setNsme}
  //   // return  () =>  '京津冀'
  // }
}
</script>

<script setup lang="ts">
let name = 'Hello World';
</script>


<style>
.wrap {
  background: red;
}
</style>
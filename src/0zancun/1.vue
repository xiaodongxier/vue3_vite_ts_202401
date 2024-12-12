<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-12 21:20:26
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="wrap">
    {{ name }}
  </div>
  <input type="text" v-model="name" />
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
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

let name = ref("Hello World");
function setNsme() {
  name.value = "Hello Vue3";
  console.log(name);
}
</script>

<style>
.wrap {
  background: red;
}
</style>

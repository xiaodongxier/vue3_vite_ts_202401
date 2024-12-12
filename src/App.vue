<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-12 21:20:26
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="wrap">
    <div>{{ name }}</div>
    <div>{{ card.name }} --- {{ card.age }} <button @click="addClick">点击</button></div>
  </div>
  <input type="text" v-model="name" />
  <button @click="setNsme">setNsme</button>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';

let card = reactive({
  name: "wangyongjie",
  age: 22
})

console.log(card)


function addClick() {
  card.age++
}








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

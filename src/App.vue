<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-12 21:20:26
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>

  <input type="text" v-model="age">
  <input type="text" v-model="name">
</template>


<script setup lang="ts">
import { reactive, ref, toRef, toRefs } from 'vue';
let box = reactive({
  name: 'wangyongjie',
  age: 18
})

let { name, age } = toRefs(box);
let newName = toRef(box, 'name')
</script>

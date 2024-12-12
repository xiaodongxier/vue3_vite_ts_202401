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
  <hr>
  <ul>
    <li v-for="item in games" :key="item.name">{{ item.name }}</li>
  </ul>
  <button @click="handleGames">切换</button>
  <hr>
  <div>{{ box1[0].name }}</div>
  <input type="text" v-model="box1[0].name" />
  <button @click="handleClick2">handleClick2</button>
  <hr>
  <div>{{ box2.name }} --- {{ box2.age }}</div>
  <button @click="box22">box2</button>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';


let box2 = reactive({
  name: "box2",
  age: 220
})

function box22() {
  box2 = Object.assign(box2, { name: "box2" + Math.random(), age: 220 })
  // box2 = { name: "box2" + Math.random(), age: 220 }
}


let box1 = ref([
  {
    name: "bix",
    age: 22
  },
  {
    name: "aa",
    age: 33
  }
])

function handleClick2() {
  box1[0].name = "bix" + Math.random()
  console.log(box1)
}


let games = reactive([
  {
    name: "英雄联盟",
    age: 22
  },
  {
    name: "王者荣耀",
    age: 22
  },
  {
    name: "绝地求生",
    age: 22
  },
])

function handleGames() {
  games[0].name = "英雄联盟" + Math.random()
  console.log(games)
}





let card = reactive({
  name: "wangyongjie",
  age: 22
})
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

<template>
  <div class="child-wrap">
    <h3>{{ title }}</h3>
    <br>
    姓名：{{ name }}
    <br>
    年龄：{{ age }}
    <br>
    年龄：{{ info.height }}
    <br>
    <button @click="handleName">切换名字</button>
    <button @click="handleAge">切换年龄</button>
    <button @click="handleHeight">切换身高</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs,toRef } from 'vue';
// 数据
const title = "toRefs & toRef";
const n = ref(0);
const info = reactive({
  name: '张三',
  age: 18,
  height: 1.88
})
console.log(n.value);


const { name, age } = toRefs(info)

console.log("解构赋值", name, age);

const h = toRef(info, 'height');
console.log("toRef", h.value);

// 方法
function handleName(){
  name.value += '~'
  console.log("handleName",name.value, info.name, info);
}

function handleAge(){
  age.value ++
  console.log("handleAge",age.value, info.age, info);
}

function handleHeight(){
  h.value ++
  console.log("handleHeight",age.value, info.age, info);
}

</script>
<style lang="" scoped>
</style>
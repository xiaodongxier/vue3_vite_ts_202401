<template>
  <div class="child-wrap">
    标题: {{ name }}
    <br>
    姓名：{{ info.name }}
    <br>
    年龄：{{ info.age }}
    <br>
    薪资：{{ info.job.j1.salary }}
    <br>
    <button @click="handleName">切换名字</button>
    <button @click="handleAge">切换年龄</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// 数据
const title = "toRefs";
const n = ref(0);
const info = reactive({
  name: '张三',
  age: 18,
  job: {
    j1: {
      salary: 20
    }
  }
})
console.log(n.value);


const { name, age } = info

console.log("解构赋值", name, age);

// 方法
function handleName(){
  info.name += '~'
}

function handleAge(){
  info.age ++
}

</script>
<style lang="" scoped>
</style>
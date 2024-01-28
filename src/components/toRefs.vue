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
    <button @click="handleAge">切换</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const name = "toRefs";
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

function handleAge(){
  info.age ++
}

</script>
<style lang="" scoped>
</style>
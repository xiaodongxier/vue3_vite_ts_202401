<template>
  <div class="child-wrap">
    {{ title }}
    <br>
    姓：<input v-model="info.firstName">
    <br>
    名：<input v-model="info.lastName">
    <br>
    全名：{{ fullName1() }}
    <br>
    全名：{{ fullName1() }}
    <br>
    全名：{{ fullName1() }}

  </div>
</template>

<script setup lang="ts">
import { ref,reactive, computed } from 'vue';
const title = ref("computed相关")
const info = reactive({
  title: "computed",
  firstName: "zhang",
  lastName: "san",
})

function fullName1(){
  console.log("方法调用了一次");
  return info.firstName.slice(0,1).toUpperCase() + info.firstName.slice(1) + "-" +  info.lastName
}

// 这么定义的 fullName 是只读的计算属性
const fullName = computed(()=>{
  console.log("computed调用了一次");
  return info.firstName.slice(0,1).toUpperCase() + info.firstName.slice(1) + "-" +  info.lastName
})

</script>
<style lang="" scoped></style>
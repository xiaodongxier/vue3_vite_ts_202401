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
    <br>
    <button @click="handleName()">改为李四</button>
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
// const fullName = computed(()=>{
//   console.log("computed调用了一次");
//   return info.firstName.slice(0,1).toUpperCase() + info.firstName.slice(1) + "-" +  info.lastName
// })

const fullName = computed({
  get(){
    return info.firstName.slice(0,1).toUpperCase() + info.firstName.slice(1) + "-" +  info.lastName
  },
  set(val){
    console.log("set方法被调用了",val);
     const [arr1,arr2] = val.split("-");
    console.log("set方法被调用了,arr1",arr1);
    console.log("set方法被调用了,arr2",arr2);
    info.firstName = arr1
    info.lastName = arr2
  },
})

function handleName(){
  fullName.value = "li-si"
  console.log(fullName.value);
}
</script>
<style lang="" scoped></style>
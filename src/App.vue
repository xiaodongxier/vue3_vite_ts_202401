<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-14 23:19:43
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  姓：<input type="text" v-model="firstName">
  <hr>
  名：<input type="text" v-model="lastName">
  <hr>
  姓名：{{ name2 }}
  <button @click="handleClickName()">直接修改姓名</button>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
let firstName = ref('王')
let lastName = ref('先生')

// 方法
let name = function () {
  console.log("调取了1次")
  return firstName.value + lastName.value
}


// 可读，可修改
let name2 = computed({
  get() {
    return firstName.value + lastName.value;
  },
  set(value: string) {
    console.log("value", value)
    const [firstName1, lastName1] = value.split("-")  // 数组解构赋值
    firstName.value = firstName1
    lastName.value = lastName1
  },
});

function handleClickName() {
  name2.value = "张-三"
}
</script>

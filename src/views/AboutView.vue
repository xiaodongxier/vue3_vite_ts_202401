<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-19 23:29:00
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="about">
    <input type="number" v-model.number="count1.value" />
    <input type="number" v-model.number="count1.age" />
    <br>
    <input type="number" v-model.number="count2.value" />
    <input type="number" v-model.number="count2.age" />
    <div>{{ count1.value + count2.value }}</div>

  </div>
</template>

<script lang="ts" setup name="AboutView">
import { ref, watch, reactive } from 'vue'

const count1 = reactive({ value: 0, age: 5 });
const count2 = reactive({ value: 0, age: 5 });

// const stopWatch = watch(count1, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
//   if (newVal > 10) {
//     stopWatch();  // 停止监听
//   }
// }, {
//   // immediate: true, // 立即执行，下面的 once 也算是立即执行，再次修改就不会执行了
//   // once: true, // 只执行一次
// })
const stopWatch = watch(() => { return [count1.age, count2.age] }, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if (newVal > 10) {
    stopWatch();  // 停止监听
  }
}, {
  // immediate: true, // 立即执行，下面的 once 也算是立即执行，再次修改就不会执行了
  // once: true, // 只执行一次
})
</script>

<style>
.about {
  border: 5px solid blue;
}
</style>

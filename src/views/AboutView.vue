<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-18 23:29:24
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="about">
    <input type="number" v-model.number="count1.value" />
    <br>
    <input type="number" v-model.number="count2.value" />
    <div>{{ count1.value + count2.value }}</div>

  </div>
</template>

<script lang="ts" setup name="AboutView">
import { ref, watch, reactive } from 'vue'

const count1 = reactive({ value: 0 });
const count2 = reactive({ value: 0 });

const stopWatch = watch(count1, (newVal, oldVal) => {
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

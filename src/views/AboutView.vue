<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-18 00:02:47
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="about">
    <input type="text" v-model.number="count1" />
    <br>
    <input type="text" v-model.number="count2" />
    <div>{{ count1 + count2 }}</div>

  </div>
</template>

<script lang="ts" setup name="AboutView">
import { ref, watch } from 'vue'

const count1 = ref(0);
const count2 = ref(0);


const stopWatch = watch(count1, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if (newVal > 10) {
    stopWatch();
  }
})
</script>

<style>
.about {
  border: 5px solid blue;
}
</style>

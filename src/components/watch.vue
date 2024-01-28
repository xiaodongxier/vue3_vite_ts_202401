<!--
 * @Date: 2024-01-28 17:58:58
 * @LastEditTime: 2024-01-28 21:43:48
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="child-wrap">
    <h3>{{title}}</h3>
    求和：{{ sum }}
    <br>
    <button @click="handleClick">点击</button>


  </div>
</template>

<script setup lang="ts">
import { ref , watch} from 'vue';
const title = ref("watch相关")
const sum = ref(0);
function handleClick(){
  sum.value += 1
}

const stopWatch =  watch(sum, (newValue, oldValue)=> {
  console.log("sum变化了-新值", newValue);
  console.log("sum变化了-旧值", oldValue);
  if(newValue > 5){
    stopWatch()
    console.log("停止监听");
    title.value = "watch相关-停止监听"
  }
})
</script>
<style lang="" scoped></style>
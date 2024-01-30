<!--
 * @Date: 2024-01-28 17:58:58
 * @LastEditTime: 2024-01-30 22:25:47
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="child-wrap">
    <h3>{{title}}</h3>
    <br>
    姓名：{{ sum.name }}
    <br>
    年龄：{{ sum.age }}
    <br>
    <button @click="handleName">切换姓名</button>
    <button @click="handleAge">切换年龄</button>


  </div>
</template>

<script setup lang="ts">
import { ref , watch} from 'vue';
const title = ref("watch相关-监视ref定义的对象类型")
const sum = ref({
  name: "wang",
  age : 18
});


function handleName(){
  sum.value.name += "~"
}

function handleAge(){
  sum.value.age += 1
}



watch(sum, (newVal, oldVal)=> {
  console.log("newVal", newVal);
  console.log("oldVal", oldVal);
},
{
  deep:true
})

</script>
<style lang="" scoped></style>


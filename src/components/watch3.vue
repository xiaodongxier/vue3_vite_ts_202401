<!--
 * @Date: 2024-01-28 17:58:58
 * @LastEditTime: 2024-01-30 22:59:42
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
    <button @click="handleSum">切换所有</button>


  </div>
</template>

<script setup lang="ts">
import { reactive, ref , watch} from 'vue';
const title = ref("watch相关-监视reactive/ref定义的数据(对象类型)某个属性")
const sum = reactive({
  name: "wang",
  age : 18
});

function handleName(){
  sum.name += "~"
}

function handleAge(){
  sum.age += 1
}


function handleSum() {
  Object.assign(sum,{
    name: "hahha",
    age : 28
  })
}

// 监视 reactive 定义的数据，默认开启深度监视
watch(sum, (newVal, oldVal)=> {
  console.log("newVal", newVal);
  console.log("oldVal", oldVal);
})

</script>
<style lang="" scoped></style>


<!--
 * @Date: 2024-01-28 17:58:58
 * @LastEditTime: 2024-01-30 23:12:54
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
    信息：{{ sum.info }}
    <br>
    <button @click="handleName">切换姓名</button>
    <button @click="handleAge">切换年龄</button>
    <button @click="handleSum">切换所有</button>
    <button @click="handleInfo">切换信息</button>
    <button @click="handleAllInfo">切换所有信息</button>


  </div>
</template>

<script setup lang="ts">
import { reactive, ref , watch} from 'vue';
const title = ref("watch相关-监视reactive/ref定义的数据(对象类型)某个属性")
const sum = reactive({
  name: "wang",
  age : 18,
  info : {
    address : "北京"
  }
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

function handleInfo(){
  sum.info.address = "上海"
}

function handleAllInfo(){
  sum.info = {
    address : "广州"
  }
}

// watch(()=> sum.name, (newVal, oldVal)=> {
//   console.log("newVal", newVal);
//   console.log("oldVal", oldVal);
// })

// // 只监听对象里面的数据
// watch(sum.info, (newVal, oldVal)=> {
//   console.log("newVal", newVal);
//   console.log("oldVal", oldVal);
// })


// // 只监听整个对象，单独的监听不到
// watch(()=>sum.info, (newVal, oldVal)=> {
//   console.log("newVal", newVal);
//   console.log("oldVal", oldVal);
// })

// 只监听整个对象，单独的监听不到
watch(()=>sum.info, (newVal, oldVal)=> {
  console.log("newVal", newVal);
  console.log("oldVal", oldVal);
}, {deep:true})

</script>
<style lang="" scoped></style>


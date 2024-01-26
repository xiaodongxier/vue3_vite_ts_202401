<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-26 09:24:38
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="Preson">
    姓：<input type="text" v-model="firstName">
    名：<input type="text" v-model="lasterName">
    姓名：<span>{{firstName}} - {{ lasterName }}}</span>

    <button @click="handleEditName">
      修改名字
    </button>
  </div>
</template>


<script setup lang="ts" name="Preson">
import { ref } from 'vue'
let firstName = "wang";
let lasterName = ref("hhha")


function handleEditName(){
  lasterName.value += "="
}

</script>


<style scoped>
.Preson {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
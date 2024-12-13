<!--
 * @Date: 2024-01-19 15:38:25
 * @LastEditTime: 2024-12-13 23:46:29
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  姓：<input type="text" v-model="firstName">
  <hr>
  名：<input type="text" v-model="lastName">
  <hr>
  姓名：{{ name }}
  <hr>
  {{ firstName }} - {{ lastName }}
</template>


<script setup lang="ts">
import { ref } from 'vue';
let firstName = ref('王')
let lastName = ref('先生')

let name = firstName.value + lastName.value

</script>

<template>
  <div class="child-wrap">
    {{ title }}
    姓：{{ info.firstName }}
    <br>
    名：{{ info.lastName }}
    <br>
    全名：{{ fullName }}

  </div>
</template>

<script setup lang="ts">
import { ref,reactive, computed } from 'vue';
const title = ref("computed相关")
const info = reactive({
  title: "computed",
  firstName: "张",
  lastName: "三",
})

const fullName = computed(()=>{
  return "!1111"
})

</script>
<style lang="" scoped></style>
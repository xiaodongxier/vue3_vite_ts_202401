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
  firstName: "zhang",
  lastName: "san",
})

const fullName = computed(()=>{
  // return info.firstName + info.lastName
  console.log("computed调用了一次");
  return info.firstName.slice(0,1).toUpperCase() + info.firstName.slice(1) + "-" +  info.lastName
})

</script>
<style lang="" scoped></style>
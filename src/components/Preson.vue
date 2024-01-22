<!--
 * @Date: 2024-01-22 23:27:13
 * @LastEditTime: 2024-01-22 23:38:52
 * @Author: wangyongjie
 * @Note:  
-->
<template>
  <div class="Preson">
    {{name}}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Preson',
  data() {
    return {
      description: 'Preson',
      data(){
        return{
          name:'张三',
          age:18
        }
      }

    }
  }
}
</script>

<style scoped>
.Preson {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
</style>
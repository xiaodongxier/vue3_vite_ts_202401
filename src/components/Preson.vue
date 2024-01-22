<template>
  <div class="Preson">
    {{name}}
  </div>
</template>

<script>
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
<style lang="" scoped>
.Preson {
  background: #ccc;
  border: 1px solid #000;
  padding: 20px;
}
  
  
  
</style>
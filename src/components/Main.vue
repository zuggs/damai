<template>
  <div class="main">
    <router-view></router-view> 
    <Foot/>
  </div>
</template>

<script>
import Foot from './Footer';
export default {
  name:'Home',
  components:{
    Foot
  }
}
</script>

<style lang="scss" scoped>
.main{
  display:flex;flex-direction: column;height:100%;
}
</style>


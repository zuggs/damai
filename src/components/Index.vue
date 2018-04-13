<template>
  <div class="index">
    <Head/>
    <Home/>
  </div>
</template>

<script>
import Head from './Header';
import Home from './Home';
export default {
  name:'user',
  components:{
    Head,
    Home
  }
}
</script>

<style>
.index{flex:1;overflow:auto;}
</style>

<template>
  <div class="home">
    <Banner/>
    <Menu/>
    <Main/>
  </div>
</template>

<script>
import Banner from './Banner';
import Menu from './Menu';
import Main from './Main';
export default {
  name:'Home',
  components:{
    Banner,
    Menu,
    Main
  }
}
</script>

<style>
.home{flex:1;}
</style>

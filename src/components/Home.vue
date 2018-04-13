<template>
  <div class="home">
    <Banner/>
    <Menu/>
    <Growgrass/>
    <Live type="0"/>
    <Live type="1"/>
    <Live type="2"/>
    <Live type="3"/>
<!--     <Like/> -->
  </div>
</template>

<script>
import Banner from './Banner';
import Menu from './Menu';
import Live from './Live';
import Growgrass from './Growgrass';
//import Like from './Like';
export default {
  name:'Home',
  components:{
    Banner,
    Menu,
    Live,
    Growgrass,
    //Like
  }
}
</script>

<style>
.home{flex:1;}
</style>

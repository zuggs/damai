<template>
  <div class="home">
    <Banner/>
    <Menu/>
    <Growgrass/>
    <Like/>
  </div>
</template>

<script>
import Banner from './Banner';
import Menu from './Menu';
import Growgrass from './Growgrass';
import Like from './Like';
export default {
  name:'Home',
  components:{
    Banner,
    Menu,
    Growgrass,
    Like
  }
}
</script>

<style>
.home{flex:1;}
</style>

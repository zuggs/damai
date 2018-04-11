<template>
  <div id="app">
    <router-view></router-view> 
    <Foot/>
  </div>
</template>

<script>

import Foot from './components/Footer';
export default {
  name: 'App',
  components:{
    Foot
  }
}


</script>
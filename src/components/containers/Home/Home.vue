<template>
  <div class="home page">
    <app-banner></app-banner>
    <nav-list></nav-list>
    <live-show></live-show>
  </div>
</template>
<script>
import AppBanner from './Banner'
import NavList from './NavList'
import LiveShow from './Live'
export default {
  name: 'Home',
  components: {
    AppBanner,NavList,LiveShow
  }
}
</script>
<style lang="scss">

</style>


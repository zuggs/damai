<template>
  <div class="home page">
    <app-banner></app-banner>
    <nav-list></nav-list>
  </div>
</template>
<script>
import AppBanner from './Banner'
import NavList from './NavList'
export default {
  name: 'Home',
  components: {
    AppBanner,NavList
  }
}
</script>
<style lang="scss">

</style>


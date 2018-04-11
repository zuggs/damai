<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from './components/containers/home/home'
import AppHeader from './components/commons/Header/Header'
import AppFooter from './components/commons/Footer/Footer'
export default {
  name: 'App',
  components: {
    Home,AppHeader,AppFooter
  }
}
</script>

<style>

</style>

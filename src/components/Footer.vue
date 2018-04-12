<template>
  <footer class="footer">
    <router-link class="footer-menu" :to='{name:"index"}'>
      <i class="fa fa-home"></i>
      <p>首页</p>
    </router-link>
    <router-link class="footer-menu" to='user'>
      <i class="fa fa-user"></i>
      <p>我的大麦</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style lang="scss">
.footer{
  display:flex;justify-content:space-around;height:.5rem;align-items:center;
  >.footer-menu{
    display:flex;flex-direction:column;align-items:center;color:#999;
    >i{
      font-size:.24rem;
    }
  }
  >.footer-menu.router-link-active{
    color:#ff1268;
  }
}




</style>

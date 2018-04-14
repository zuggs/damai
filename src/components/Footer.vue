<template>
  <footer class="footer">
    <router-link class="footer-menu" :to='{name:"index"}'>
      <i :class="cl"></i>
      <p>首页</p>
    </router-link>
    <router-link class="footer-menu" :to='{name:"user"}'>
      <i class="fa fa-user"></i>
      <p>我的大麦</p>
    </router-link>
  </footer>
</template>

<script>
import bus from '../module/bus'
export default{
  name:'Footer',
  data () {
    return {
      cl:'iconfont icon-damailogo'
    }
  },
  mounted () {
    bus.$on('change',type=>{
      if(type===1){
        this.cl='iconfont icon-damailogo';
      }else{
        this.cl='fa fa-home';        
      }
    })
  }
}


</script>

<style lang="scss">
.footer{
  display:flex;justify-content:space-around;height:.5rem;align-items:center;
  background:#fff;
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

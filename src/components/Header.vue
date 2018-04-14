<template>
  <header class="header">
    <div class="header_city">
      <span class="header_city_name">北京</span>
      <i class="fa fa-angle-down"></i>
    </div>
    <router-link tag="div" to="/search" class="header_search">
      <i class="fa fa-search"></i>
      搜索明星、演唱会、场馆
    </router-link>
  </header>  
</template>
<script>
export default {
  name:'Header'
}
</script>
<style lang="scss" scoped>
.header{
  height:0.5rem;background:#f2f3f4;display:flex;align-items:center;color:#222;
  >.header_city{
    width:0.4rem;font-size:0.12rem; display:flex;align-items:center;
    justify-content:space-between;margin: 0 .2rem 0 .16rem;
  }
  >.header_search{
    width:2.86rem;height:0.27rem;background:#fff;border-radius:0.13rem;
    line-height:0.27rem;text-indent:0.34rem;color:#999;
  }
}
</style>

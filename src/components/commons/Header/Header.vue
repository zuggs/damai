<template>
  <header class="header">
    <div class="city">
      <span class="city-name">北京</span>
      <i class="iconfont icon-jiantou_down"></i>
    </div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <span>搜索明星、演唱会、场馆</span>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style lang="scss" scoped>
  .header{
    height:.5rem;
    background:#f2f3f4;
    display: flex;
    align-items: center;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 100;
    .city{
      margin:0 15px 0 12px;
      .city-name{
        color:#222;
        font-size:12px;
        float: left;
      }
    }
    .search{
      width:2.84rem;
      height:.27rem;
      background:#fff;
      border-radius: .2rem;
      display: flex;
      align-items: center;
      padding-left:.16rem;
      i{
        color:#ccc;
        margin-right:.08rem;
      }
      span{
        color:#999;
        font-size:12px;
      }
    }
  }
</style>


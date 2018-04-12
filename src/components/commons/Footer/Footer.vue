<template>
  <footer class="footer">
    <div class="index">
      <i v-if="isShow" class="iconfont icon-damailogo active"></i>
      <i @click="change" v-else class="iconfont icon-shouye"></i>
      <p v-bind:class={active:isShow}>首页</p>
    </div>
    <div class="my-damai">
      <i @click="change" v-if="isShow" class="iconfont icon-wode"></i>
      <i v-else class="iconfont icon-wodedamaijihuo active"></i>
      <p v-bind:class={active:!isShow}>我的大麦</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow
      if(this.isShow){

      }
    }
  }
    
}
</script>
<style lang="scss" scoped>
 .footer{
   position:fixed;
   bottom:-1px;
   left:0;
   right:0;
   height:.5rem;
   border-top:1px solid #e7e7e7;
   display:flex;
   background:#fff;
   z-index: 100;
   div{
     width:50%;
     float: left;
     text-align: center;
     display:flex;
     flex-direction: column;
     justify-content: center;
     i{
       font-size: .24rem;
     }
     p{
       font-size: 10px;
     }
   }
   .active{
      color:#ff1268;
    }
 }
</style>

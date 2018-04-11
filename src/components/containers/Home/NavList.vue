<template>
  <ul class="nav-box">
    <li v-for="nav in navs" :key="nav.title">
      <span>
          <img :src="nav.pic" alt="">
      </span>
      <p>{{nav.title}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NavList',
  data() {
      return {
          navs: []
      }
  },
  methods: {
      getNavs() {
        this.$http.get('/dm/v1/home/852').then(res => {
            this.navs = res.data.menu.items
        })
      }
  },
  created() {
      this.getNavs()
  }
}
</script>
<style lang="scss" scoped>
  .nav-box{
      height:106px;
      padding-top:14px;
      background: #fff;
      li{
          width:25%;
          float: left;
          text-align: center;
          font-size: 12px;
          margin-bottom: 10px;
          span{
              display:block;
              width:42px;
              height:25px;
              margin:0 auto;
              img{
                  height:100%;
              }
          }
      }
  }
</style>

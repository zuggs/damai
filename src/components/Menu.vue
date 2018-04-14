<template>
  <div class="menu">
      <router-link v-for="(menu,i) in menus"
      tag='div' class="menu-list" :to='{name:list[i]}'
      :key='menu.schema'>
        <img :src="menu.pic" alt="">
        <p>{{menu.title}}</p>
      </router-link>
  </div> 
</template>


<script>
export default {
  name:'Menu',
  data () {
      return {
        menus:[],
        list:['concert','concert','concert','concert',
        'concert','concert','concert','concert']
      }
  },
  methods:{
    getBanners () {
      this.$http.get('/mz/v1/home/852').then( r=>{
        this.menus=r.data.menu.items;
        //console.log(this.menus)
      })
    }
  },
  created () {
    this.getBanners();
  }
}
</script>

<style lang="scss" scoped>
.menu{
  display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:.13rem;
  background:#fff;
  .menu-list{
    >img{
      width:0.44rem;margin:0 .16rem
    }
    >p{
      text-align:center;margin-bottom:0.13rem;
    }
  }
}
</style>

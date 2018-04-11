<template>
 <div class="banner swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key='banner.schema'>
            <img width="100%" :src="banner.pic" alt="banner.title">
          </div>    
      </div>
      <div class="swiper-pagination"></div>
 </div>
</template>



<script>
import Swiper from 'swiper';//引入swiperjs文件
import '../../node_modules/swiper/dist/css/swiper.min.css'//引入swiper的css文件
export default {
  name:'Banner',
  data () {
    return {
      banners:[],
      menus:[]
    }
  },
  methods:{
    getBanners () {
      //http://damaimaitian.oss-cn-beijing.aliyuncs.com
      let str='/mz/v1/home/852';
      this.$http.get('/mz/v1/home/852').then( r=>{
        //console.log(r.data.banner);
        this.banners=r.data.banner;
        this.menus=r.data.menu.items
      })
      /* this.$http.get('http://damaimaitian.oss-cn-beijing.aliyuncs.com/v1/home/852')
      .then( r =>{
        console.log(r);
      }) */
    }
  },
  created () {
    //console.log(this.$http)
    this.getBanners();
  },
  updated () {
    new Swiper('.banner',{
      pagination:{
        el: '.swiper-pagination'
      },
      autoplay:true,
      loop:true
    });
  }
}
</script>



<style lang="scss">
.swiper-pagination-bullet{background:#fafafa}
.swiper-pagination-bullet-active{background:#fff}
.banner{width:100%}
</style>

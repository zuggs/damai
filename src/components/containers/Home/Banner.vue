<template>
  <div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.title">
        <img width="100%" :src="banner.pic" alt="">
      </div>
    </div>
<!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import '../../../../node_modules/swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  name: 'AppBanner',
  data () {
      return {
          banners: []
      }
  },
  methods: {
    getBanners () {
      this.$http.get('/dm/v1/home/852').then(res => {
          this.banners = res.data.banner
      })
    }
  },
  created () {
    this.getBanners()
  },
  updated(){
      new Swiper('.banner', {
        loop: true,
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
        autoplay: true
    })
  }
}
</script>
<style lang="sass" scoped>
  
</style>


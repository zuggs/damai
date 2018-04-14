<template>
  <div class="search">
      <header>
          <div class="search-box">
              <i class="iconfont icon-sousuo"></i>
              <input id="search-txt" type="text" placeholder="搜索明星、演唱会、场馆" >
          </div>
          <router-link to="/" tag="span" class="search-cancel">取消</router-link>
      </header>
      <div class="search-hotword">
          <div class="hotSearch">热搜</div>
          <ul>
              <li @click="getWord(i)" ref="wordTxt" v-for="(words,i) in hotData" :key="i">{{words.word}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import HotWord from '../../static/data/search.json'
export default {
  name: 'AppSearch',
  data() {
      return {
          hotData: HotWord.data.result.data
      }
  },
  methods: {
      getWord(i) {
         let getWordTxt = this.$refs.wordTxt[i].innerText
         document.getElementById("search-txt").value = getWordTxt
      }
  }
}
</script>

<style lang="scss" scoped>
  .search{
      background: #fff;
      height: 100%;
      header{
          height: .44rem;
          background: #f2f3f4;
          margin-bottom: 9px;
          .search-box{
              width: 3.2rem;
              height: 100%;
              margin: 0 10px;
              position: relative;
              line-height: .44rem;
              i{
                  position: absolute;
                  left: 16px;
                  color: #ccc;
                  font-size: 14px;
              }
              input{
                  height: 27px;
                  width: 100%;
                  border-radius: 15px;
                  border-style: none;
                  font-size: 12px;
                  padding-left: 37px;

              }
              float: left;
          }
          .search-cancel{
              float: right;
              margin-right: 7px;
              font-size: 14px;
              color: #222;
              height: 100%;
              line-height: .44rem;
          }
      }
      .search-hotword{
          padding: 0 13px;
          margin-bottom: 20px;
          .hotSearch{
              font-size: 12px;
              color: #999;
              margin-bottom:15px;
          }
          ul{
              li{
                  float: left;
                  border: 1px solid #e7e7e7;
                  color: #222;
                  border-radius: 25px;
                  padding: 7px 15px;
                  margin: 0 10px 9px 0;
                  font-size: 12px;
              }
          }
      }
  }
</style>

<template>
<div>
  <div class="small" v-for="(item,i) in arr[num]" :key='i'>
    <div class="small-t">
      <img width="100%" :src="arr[num][i].project_pic" alt="">
      <p>{{arr[num][i].project_name}}</p>
    </div>
    <div class="small-b">
      <h4>{{arr[num][i].tips}}</h4>
      <span>{{arr[num][i].sell_tag}}</span>
    </div>
</div>
<div @click="numChange()" class="huanyihuan">换一换
  <i class="iconfont icon-huanyihuan"></i>
  </div>
</div>
</template>
<script>
import data from '../../../static/data/data.json'
export default {
  name: 'ItemSmall',
  props: ['type'],
  data() {
    return {
        arr:[(JSON.parse(data.data.result).category_module[this.type].items).slice(0,6),
        (JSON.parse(data.data.result).category_module[this.type].items).slice(6,12),
        (JSON.parse(data.data.result).category_module[this.type].items).slice(12,18),
        (JSON.parse(data.data.result).category_module[this.type].items).slice(18,24)],
        num: 0
    }
  },
  methods: {
    numChange() {
      
      if(this.type!=2){
        this.num++
        if(this.num==4){
          this.num=0
        }
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  .small{
    width: 1.07rem;
    height: 2.05rem;
    margin: 0 10px 15px 0;
    float: left;
    .small-t{
      position: relative;
      img{
        display: block;
        margin-bottom: 5px;
        border-radius: 3px;
        height: 1.47rem;
      }
      p{
        position: absolute;
        top: 1.25rem;
        left: 9px;
        right: 0;
        width: .92rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
    }
    .small-b{
      h4{
        height: .3rem;
        line-height: 15px;
        margin-bottom: 6px;
        overflow: hidden;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-overflow: ellipsis;
        font-size: 10px;
        color: #666;
      }
      span{
        padding: 0 2px;
        border: 1px solid #ff1268;
        font-size: 10px;
        color: #ff1268;
        border-radius: 3px;
      }
    }
  }
  .huanyihuan{
    font-size: 14px;
    color: #ff1268;
    text-align: center;
    padding-bottom: 6px;
            }
</style>


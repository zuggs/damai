<template>
  <div class="small">
    <div class="small-t">
      <img width="100%" :src="liveData[0].project_pic" alt="">
      <p>{{liveData[0].project_name}}</p>
    </div>
    <div class="small-b">
      <h4>{{liveData[0].tips}}</h4>
      <span>{{liveData[0].sell_tag}}</span>
    </div>
  </div>
</template>
<script>
import data from '../../../../static/data.json'
export default {
  name: 'ItemSmall',
  data() {
    return {
        liveData: JSON.parse(data.data.result).category_module[0].items
    }
  },
  created(){
      console.log(this.liveData)
  }
}
</script>
<style lang="scss" scoped>
  .small{
    width: 1.1rem;
    height: 2.05rem;
    margin: 0 10px 15px 0;
    .small-t{
      position: relative;
      img{
        display: block;
        margin-bottom: 5px;
        width: 1.09rem;
        border-radius: 3px;
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
</style>

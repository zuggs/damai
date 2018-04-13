<template>
    <div class="item-big">
        <img width="100%" :src="liveData.project_config_pic" alt="">
        <p class="big-tag">
            <span class="big-tag-city">{{liveData.city_name.substr(0,2)}}</span>
            <span class="big-tag-words">{{liveData.top_tag}}</span>
        </p>
        <div class="big-fot">
            <span class="big-title">{{liveData.title}}</span>
            <p class="big-count">
                <i class="iconfont icon-liulan"></i>
                <span>{{liveData.view_count}}</span>
            </p>
        </div>
    </div>
</template>
<script>
import data from '../../../static/data/data.json'
export default {
  name: 'ItemBig',
  data() {
    return {
        liveData: JSON.parse(data.data.result).category_module[0].big_item
    }
  }
}
</script>
<style lang="scss" scoped>
  .item-big{
      margin-bottom: 11px;
      position: relative;
      img{
          border-radius: 3px;
      }
      .big-tag{
          position: absolute;
          top: 0;
          left: 0;
          font-size: 10px;
          background: #000;
          border-radius: 5px;
          color: #fff;
          padding: 2px 4px;
          .big-tag-city{
              border-right:1px solid #fff;
              padding-right: 5px;
              margin-right: 5px;
          }
      }
      .big-fot{
          position: absolute;
          left: .1rem;
          bottom: .1rem;
          right: .1rem;
          display: flex;
          justify-content: space-between;
          color: #fff;
          height: 14px;
          .big-title{
              font-size: 14px;
          }
          .big-count{
              font-size: 10px;
              i{
                  font-size: 10px;
              }
          }
      }
  }
</style>

<template>
  <div class="live-show">
      <div class="live-hd">
          <h3>{{liveData.main_title}}</h3>
          <div class="more">
              <span>更多</span>
              <i class="iconfont icon-jiantou"></i>
          </div>
      </div>
      <div class="live-content">
          <item-big :type="type"></item-big>
          <small-box :type="type"></small-box>
          
      </div>
  </div>
</template>
<script>
import data from '../../static/data/data.json'
import ItemBig from './Live/LiveItemBig'
import SmallBox from './Live/LiveSmallBox'
export default {
  name: 'LiveShow',
  props: ['type'],
  components: {
      ItemBig,SmallBox
  },
  data() {
    return {
        liveData: JSON.parse(data.data.result).category_module[this.type]
    }
  }
}
</script>
<style lang="scss" scoped>
    .live-show{
        overflow: hidden;
        margin-top:10px;
        background:#fff;
        .live-hd{
            display: flex;
            height: 45px;
            align-items: center;
            justify-content: space-between;
            padding:0 12px;
            h3{
                font-size: 16px;
                font-weight: 900;
                color: #000;
            }
            .more{
                font-size: 12px;
                color: #999;
                i{
                    font-size: 10px;
                }
            }
        }
        .live-content{
            padding: 0 12px 15px;
            
        }
    }
</style>

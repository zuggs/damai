<template>
  <div class="growgrass">
    <div class="grasshead">
      <span class="grassLeft" 
        :style='this.style'>
        <p><span>{{lists.city_name}} {{lists.top_tag}}</span></p>        
        <div class=".growgrass__big__ft">
          <span>{{lists.title}}</span>
          <p><i class="fa fa-eye"></i><span>{{lists.view_count}}</span></p>
        </div>        
      </span>
      <span class="grassRight"></span>
    </div>
    <div class="grassfooter">
      <li class="grassList" v-for="(item,i) in items" :key='i'>
        <span :style='{
          background:"url("+item.project_config_pic+")",
          backgroundSize:"cover"}' class="list-name">
        {{item.tips}}
        </span>
        <p>{{item.title}}</p>
      </li>
    </div>    
  </div>
</template>

<script>
export default {
  name:'growgrass',
  data () {
    return {
      lists:{},
      items:{},
      style:{}   
    }
  },
  methods:{
    getData(){
      this.$http.get('/static/data/data.json').then( (r)=>{
        let data=JSON.parse(r.data.data.result).growgrass_module[0]
        this.lists=data.big_item;
        this.style={
          background:"url("+this.lists.project_config_pic+")",
          backgroundSize:"cover"
        }
        this.items=data.items;//url("//pimg.dmcdn.cn/perform/project/1443/144367_n.jpg?_t=1520747245632")
        //console.log(JSON.parse(r.data.data.result));
      });
    }
  },
  created () {
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
.growgrass{
  padding:.08rem .16rem .2rem;background:#fff;color:#fff;margin-bottom:.13rem;
  >.grasshead{
    display:flex;
    >.grassLeft{
      width:2.56rem;height:1.25rem;position: relative;
      >p{
        position: absolute;
        top: 0;left: 0;font-size: .12rem;background: #000;
        padding: .027rem .053rem;border-bottom-right-radius: .12rem;
        border-top-left-radius: .065rem;
      }
      >div{
          position: absolute;bottom: .13rem;left: .1rem;right: .13rem;
          line-height: .2rem;
          >span{
            float: left;font-size: .16rem;
          }
          >p{
            float: right;font-size: .12rem;
          }
      }
    }
    >.grassRight{
      flex:1;background:url(//pimg.dmcdn.cn/perform/project/1443/144367_n.jpg?_t=1520747245632);
      background-size:cover;
    }
  }
  >.grassfooter{
    margin-top: .05rem;display:flex;justify-content:space-between;
    >li{   
      >span{
        height:.7rem;width:1.13rem;display:flex;justify-content:center;
        align-items:flex-end;padding-bottom:.05rem;
      }
      >p{
        height:.43rem;color:#000;display:flex;justify-content:center;
        align-items:center;;
      }
    }
  }
}









</style>

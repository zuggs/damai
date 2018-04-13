<template>
  <div class="like">
    <div class="guess-hd">
      －－<i class='fa fa-gratipay'></i> 猜你喜欢－－
    </div>
	<div class="guess-bt">
		<Likelist v-for='list in lists' :key='list.project_id' :data='list'/>
	</div>
  </div>
</template>

<script>
import Likelist from './Likelist'
import datalist from '../../static/data/like.json'
export default {
  name:'like',
  components:{
	  Likelist
  },
  data (){
    return {
      lists :JSON.parse(datalist.result).data
    }
  },
  created () {
    console.log(this.lists)
  }
}
</script>

<style lang='scss' scoped>
.like{
    .guess-hd{
		font-size:.18rem;font-weight:700;text-align:center;padding:.24rem 0;
    }
    .guess-bt{
      padding:0 .16rem;flex-wrap:wrap;justify-content:space-between;
      display:flex;
    }
}
</style>

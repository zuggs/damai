<template>
  <div class="like">
    <div class="guess-hd">
      <i class='fa fa-gratipay'></i> 猜你喜欢
    </div>
	<div class="guess-bt">
		<Likelist v-for=""/>
	</div>
  </div>
</template>

<script>
import Likelist from './Likelist'
export default {
  name:'like',
  components:{
	  Likelist
  }
}
</script>

<style lang='scss' scoped>
.like{
    .guess-hd{
		font-size:.18rem;font-weight:700;text-align:center;padding:.24rem 0;
    }
}
</style>

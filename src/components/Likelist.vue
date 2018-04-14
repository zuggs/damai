<template>
  <div class="likeList">
    <img :src="data.project_pic" alt="">
    <h2>{{data.project_name}}</h2>
    <span>{{data.sub_title}}</span>
    <p>{{data.tips}}</p>
  </div>
</template>

<script>
export default {
  name:'likelist',
  props:['data'],
  created(){
    //console.log(this.data)
  }
}
</script>

<style lang='scss' scoped>
  .likeList{
    padding-bottom: .16rem;
    width: 1.6rem;
    height: 3.38rem;
    overflow: hidden;
    >img{
      width:100%;
    }
    >h2{
      padding-left: .13rem;font-size: .14rem;color: #000;font-weight: 700;
      height: .23rem;overflow: hidden;text-overflow: ellipsis;margin:.05rem 0;
      display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;    
      white-space:no-wrap;
    }
    >span{
      font-size:.12rem;border-radius:.04rem;border:1px solid #ccc;
    }
    >p{
      margin-top:.05rem;line-height:.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: .12rem;
    color: #666;
    }
    }</style>

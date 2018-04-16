<template>
  <div class="user">
    <div class="user-header">
      <img src="//gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png" alt="tou">
      <router-link tag='p'
      :to='{name:"login"}'
      >{{user}}</router-link>
      <div v-if='user!=="登录/注册"' class="loginoff" @click='login_off'> 退出</div>
    </div>
    <div class="user-lists">
      <div class="user-list" v-for="list of lists" :key="list.id">
        <div class="list-left">
          <i :class='list.icon'></i>
          <span>{{list.title}}</span>
        </div>
        <i class="fa fa-angle-right list-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
//url("//gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png")
//angle-right
export default {
  name:'User',
  data(){
    return {
      lists:[
        {id:1,title:'我的订单',icon:'fa fa-file-text-o'},
        {id:2,title:'优惠券',icon:'fa fa-jpy'},
        {id:3,title:'我的票',icon:'fa fa-copy'},
        {id:4,title:'我想看的',icon:'fa fa-heart-o'},
        {id:5,title:'收货地址',icon:'fa fa-map-marker'},
        {id:6,title:'常用购票人',icon:'fa fa-user-circle-o'}
      ],
      user:''
    }
  },
  methods:{
    getuser(){
      this.user=localStorage.userinfo?localStorage.userinfo:'登录/注册';
    },
    login_off(){
      localStorage.removeItem('userinfo');
      location.reload();
    }
  },
  created(){
    this.getuser();
  }
}
</script>

<style lang="scss" scoped>
.user{
  flex:1;
  >.user-header{
    height:1rem;display:flex;background:#ff1268;color:#fff;align-items:center;
    margin-bottom:.2rem;
    >img{
      width:.63rem;height:.63rem;border-radius:50%;margin:0 .14rem;
    }
    >p{
      font-size:.14rem;
    }
    >.loginoff{
      margin-left:.3rem;font-size:16px;
    }
  }
  >.user-lists{  
    .user-list{
      display:flex;justify-content:space-between;height:.56rem;align-items:center;
      background:#fff;margin:.03rem 0; padding:0 .12rem;font-size:.16rem;
      >.list-left{
        >i{color:#ff1268}
        >span{color:#666}
      }
      >.list-right{
        >i{color:#999}
      }
    }
  }
}

</style>

<template>
<div class="login">
    <img 
    src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" 
    alt="">
    <div class="user">
        <span class="num">+86﹀</span>
        <input type="text" placeholder="请输入手机号" v-model="username">
    </div>
    <div class="ps">
        <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <button @click='log'>登 录</button>
    <router-link tag='div' class="rg" 
    to='register'
    >新用户注册</router-link>
</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    name:'login',
    data () {
        return {
            username:'',
            password:''
        }

    },
    methods:{
        log () {
            if(this.username!=''&&this.password!=''){
                //let userinfo={username,password};
                if(localStorage[this.username]===this.password){
                    localStorage.userinfo=this.username;
                    Indicator.open({
                        text: '登录成功，正在前往用户页...',
                        spinnerType: 'double-bounce'
                    });
                    setTimeout(()=>{
                        Indicator.close(); 
                        //console.log(this.$router.replace)
                        this.$router.push({
                            name:'user'
                        });
                    },1000)
                }else{
                   alert('账号或密码错误'); 
                }                
            }else{
                alert('账号或密码不能为空');
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.login{
    height:100%;background:#fff;
    >img{
        width:1rem;height:.45rem;margin:.51rem auto;
    }
    >.user{
        width:3.35rem;height:.42rem;border-bottom:1px solid #ccc;
        margin:.1rem auto;line-height:.42rem;
        >span{
            padding:.1rem;border-right:1px solid #ccc;          
        }
        >input{
            border:0;width:2.65rem;
        }
    }
    >.ps{
        width:3.35rem;height:.42rem;border-bottom:1px solid #ccc;
        margin:.1rem auto;line-height:.42rem;
        >input{
            border:0;width:100%
        }
    }
    >button{
        width:3.35rem;border:0;background-color: #ff1268;
        border: 1px solid #ff9000; line-height: 42px;display:block;
        border-radius: 3px;height: 42px;margin:0 auto;color:#fff;
   
    }
    >.rg{
        width:3.35rem;text-align:right;font-size:12px;color:#999;
        line-height:28px;
    }
}
</style>

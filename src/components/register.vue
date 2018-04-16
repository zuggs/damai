<template>
<div class="login">
    <img 
    src="//gw.alicdn.com/tfs/TB1bx8NXlfH8KJjy1XbXXbLdXXa-300-138.png" 
    alt="">
    <div class="user dis">
        <i>国家地区</i> 
            <i>+86  &gt;</i>
    </div>
    <div class="ps">
        <input type="text" placeholder="请输入手机号" v-model="username">
    </div>
    <div class="ps">
        <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <button @click='rgs'>同意协议并注册</button>
    <p>我已阅读接受<span>《大麦网会员服务协议》</span>
        及<span>《隐私专项条款》</span>并同意自动注册成为会员
    </p>
</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    name:'login',
    data () {
        return {
            username:'',
            password:'',
            actions:['中国大陆 +86','中国香港 +862','中国澳门 +863','中国台湾 +866']
        }

    },
    methods:{
        rgs(){
            if(this.username!=''&&this.password!=''){
                //let userinfo={username,password};
                localStorage[this.username]=this.password;
                Indicator.open({
                    text: '注册成功，正在前往登录...',
                    spinnerType: 'double-bounce'
                });
                setTimeout(()=>{
                    Indicator.close(); 
                    //console.log(this.$router.replace)
                    this.$router.push({
                        name:'login'
                    });
                },1000)
            }else{
                alert('账号或密码输入有误');
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
    >.dis{
        display:flex;justify-content:space-between;color:#999;
        font-size:14px;
    }
    >.ps{
        width:3.35rem;height:.42rem;border-bottom:1px solid #ccc;
        margin:.1rem auto;line-height:.42rem;
        >input{
            border:0;width:100%
        }
    }
    >button{
        width:3.35rem;border:0;    background-image: linear-gradient(90deg,#ff4aae,#ff1268);
        border: 1px solid #ff9000; line-height: 47px;display:block;
        border-radius: 8px;height: 47px;margin:0 auto;color:#fff;
        margin-top:20px;
    }
    >p{
        width:3.35rem;;font-size:12px;color:#666;margin:10px auto;
        line-height:16px;
        >span{
            color: #ff1268;
        }
    }

}
</style>

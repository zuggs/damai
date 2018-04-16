
<template>
<router-link tag='div' class="intro" :to='{
    name:"project",params:{id:list.id}
    }'>
    <img :src="list.verticalPic" alt="">
    <ul>
        <li class="title">{{list.subTitle}}</li>
        <li class="time">
            <span>{{list.showTime}} </span>
            <i> | {{list.venueName}}</i>
        </li>
        <li class="price">
            <span>{{price[0]}} - {{price[3]}}</span>元
        </li>
        <li class="sub">{{list.subHead}}</li>
    </ul>
</router-link>
</template>

<script>
export default {
    name:'intro',
    props:['list'],
    computed:{
        price () {
            return this.list.priceStr.split(",")
        }
    },
    created(){
        //console.log(this.price)
    }
}
</script>

<style lang="scss" scoped>
.intro{
    margin:.2rem;display:flex;border-bottom:1px solid #ccc;

    >img{
        width:.66rem;height:.89rem;margin-right:.13rem;
    }
    >ul{
        flex:1;
        >.title{
            font-size:.15rem;margin-bottom:.06rem;
        }
        >.time{
            display: -webkit-box;-webkit-box-orient: vertical;
            overflow: hidden;-webkit-line-clamp: 2;
            word-break: break-all;font-size:.12rem;color:#999;  
        }
        >.price{
            font-size:.12rem;color:#999;padding:.08rem 0;
            border-bottom:1px solid #ccc;
            >span{
                color: #ff1268;font-size:.16rem;
            }
        }
        >.sub{
            display: -webkit-box;-webkit-box-orient: vertical;
            overflow: hidden;-webkit-line-clamp: 2;
            word-break: break-all;font-size:.12rem;line-height:.2rem;
            color:#999;margin:.05rem 0;
    
        }
    }
}
</style>


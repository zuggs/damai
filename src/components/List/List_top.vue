

<template>
<div class="list_top">
    <ul class="listMenu">
        <li 
        :class='cl(i)' v-for='(list,i) in lists' 
        @click='cg(i)' 
        :key='i'>{{list}}</li>
    </ul>
    <ul class="range">
        <li>北京 <i class="fa fa-angle-down"></i></li>
        <li>推荐排序 <i class="fa fa-angle-down"></i></li>
        <li>不限 <i class="fa fa-angle-down"></i></li>
    </ul>    
</div>
</template>

<script>
export default {
    name:'ListTop',
    props:{
        ind:{
            default:0
        }
    },
    data () {
        return{
            lists:['全部','演唱会','话剧格局','音乐会','体育比赛',
        '曲苑杂坛','儿童亲子','展览休闲','电影'],
            li:['concert','modern_drama','music','concert',
        'comic_dialog','parent_child','casual','concert']
        }     
    },
    methods:{
        cl (i) {
            //console.log(this.ind)
            if(i==this.ind){
                return 'border';
            }else{
                return '';
            }
        },
        cg (i) {
            this.$router.replace({name:"listPage",query:{
                    type:this.li[i-1],
                    ind:i
                }
            });
            location.reload();
        }
    },
    mounted(){
        var ul=document.querySelector('.listMenu');
        var li=document.querySelector('.listMenu>li:nth-child('+this.ind+')');
        ul.scrollLeft=li.offsetLeft;
    }
}
</script>

<style lang="scss" scoped>
.list_top{    
    >ul{
        border-bottom:1px solid #f2f3f4;
        white-space: nowrap;overflow: auto;
        >li{
            display: inline-block;box-sizing: border-box;line-height:.45rem;
            margin: 0 .2rem;font-size: .12rem;color: #666;
        }
    }
    >ul::-webkit-scrollbar {display:none;}
    .range>li{
        margin:0 .4rem;
    }
}
.border{
    border-bottom: 2px solid #ff1268;color:#000!important;
}
</style>


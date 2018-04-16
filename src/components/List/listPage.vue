

<template>
<div class="listPage">
    <list_top :ind='ind'/>
    <Intro v-for='(list,i) in lists' :list='list' :key='i'/>
</div>
</template>

<script>

import List_top from './List_top'
import Intro from './Intro'
export default {
    data(){
        return {
            name:'',
            lists:[]
        }
    },
    //props:['type','ind'],
    computed:{
        url () {
            return '/static/data/list/'+this.type + '.json';
        }
    },
    methods:{
        getMessage () {
            this.$http.get(this.url).then(r=>{
                //console.log(r.data.data.projectInfo);
                this.lists=r.data.data.projectInfo;
            })
        }
    },
    created () {
        //console.log(this.type)
        this.type=this.$route.query.type;
        this.ind=this.$route.query.ind;
        this.getMessage();
    },
    components:{
        List_top,
        Intro
    }
}
</script>

<style>
.listPage{
    background:#fff;height:100%;
}
</style>

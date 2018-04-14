

<template>
<div class="concert">
    <list_top/>
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
    computed:{
        url () {
            return '/static/data/list/'+this.name + '.json';
        }
    },
    methods:{
        getMessage () {
            this.$http.get(this.url).then(r=>{
                console.log(r.data.data.projectInfo);
                this.lists=r.data.data.projectInfo;
            })
        }
    },
    created () {
        this.name=this.$route.name;
        this.getMessage();
    },
    components:{
        List_top,
        Intro
    }
}
</script>

<style>
.concert{
    background:#fff;height:100%;
}
</style>

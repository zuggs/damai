import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Main from '../components/Main';
import User from '../components/User';
import bus from '../module/bus';
import Concert from '../components/List/concert';

Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '',
      redirect: '/main'//路由重定向，当路径为空时，进入的路由路径
    },{
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path: '',
          redirect: 'index',
        },{
          path: 'index',
          name: 'index',
          component: Index
        },{   
          path: 'user',
          name: 'user',
          component: User
        }
      ]
    },{
      path:'/concert',
      name:'concert',
      component:Concert
    }
  ]
});
router.afterEach((to, from) => {
  if(to.name==='index'){
    bus.$emit('change',1);//绑定一个事件，让需要的组件去触发
  }else if(to.name==='user'){
    bus.$emit('change',2);
  }
  //console.log('afterEach')
});



export default router;
import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import User from '../components/User';
import bus from '../module/bus';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'//路由重定向，当路径为空时，进入的路由路径
    },{
      path: '/index',
      name: 'index',
      component: Index
    },{   
      path: '/user',
      name: 'user',
      component: User
    }
  ]
});
/* Router.afterEach((to, from) => {
  if(to.name==='index'){
    bus.$emit('change');//绑定一个事件，让需要的组件去触发
  }
console.log('afterEach')
}) */

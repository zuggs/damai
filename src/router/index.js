import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import User from '../components/User';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'//路由重定向，当路径为空时，进入的路由路径
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{   
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})

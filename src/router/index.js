import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import User from '../components/User';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{   
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})

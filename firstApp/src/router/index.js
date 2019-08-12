import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Login from '@/components/Login'
import MemberUser from '@/components/MemberUser'
import Product from '@/components/Product'
import BuyCar from '@/components/BuyCar'
import Address from '@/components/Address'
import Pay from '@/components/Pay'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/MemberUser',
      name: 'MemberUser',
      component: MemberUser,
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/BuyCar',
      name: 'BuyCar',
      component: BuyCar,
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address,
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
    },
  ]
})

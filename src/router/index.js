import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Resale from '@/components/Resale'
import More from '@/components/More'
import Servises from '@/components/Servises'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/resale',
      name: 'resale',
      component: Resale
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/servises',
      name: 'servises',
      component: Servises
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

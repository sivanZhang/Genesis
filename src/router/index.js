import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import More from '@/components/More'
import Profile from '@/components/Profile'
import Iframe from '@/components/Iframe'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/more',
            name: 'more',
            component: More
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/iframe',
            name: 'Iframe',
            component: Iframe
        }
    ]
})
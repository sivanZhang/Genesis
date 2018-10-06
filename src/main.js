import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
import $ from 'jquery'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'
import FastClick from 'fastclick' // 解决移动端300毫秒延迟
import loading from '@/components/loading'
Vue.component('loading', loading)
FastClick.attach(document.body);
Vue.config.productionTip = false
const state = {
    url: ''
};
const mutations = {
    setUrl(state, url) { //state 默认放入参数
        state.url = url
    }
}
const store = new Vuex.Store({ state, mutations })

new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
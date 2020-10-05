import Vue from 'vue'
import Router from 'vue-router'
import MainRouter from './main-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        MainRouter
    ]
})

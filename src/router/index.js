import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import login from '../components/login'
import edit_interface from '../components/interface/edit_interface'


Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/index/1'
        },
        {
            path: '/index/:tab',
            name: 'index',
            component: index,
            props: true,
        },
        {
            path: '/add/interface',
            name: 'add_interface',
            component: edit_interface,
            props: true,
        },
        {
            path: '/edit/interface',
            name: 'edit_interface',
            component: edit_interface,
            props: true,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        }
    ]
})
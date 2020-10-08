import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import music from './view/music'
import weather from './view/weather'
import result from './view/music-result'
import weathercontain from './view/weathercontain'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false



const router = new VueRouter({
    routes: [{
        path: '/',
        component: music
    }, {
        path: '/music',
        component: music,
        children: [{
            path: '/music/:key',
            component: result,
            props: true
        }]
    }, {
        path: '/weather',
        component: weather
    }, {
        path: '/weathercontain',
        component: weathercontain
    }]
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
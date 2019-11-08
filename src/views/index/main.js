import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import './utils/filter'
import './utils/validate'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import http from './http'
import util from './utils/commonFun'
import './assets/normalize.css'
Vue.prototype.$util = util
Vue.prototype.$api = http;

// import VConsole from 'vconsole'
// let vConsole = new VConsole();
// Vue.prototype.$vConsole = vConsole;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */
    // console.log(to.meta.content)
    if (to.meta.content) {
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
        document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    // /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
});
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js'
import news from './moduls/news.js'
import look from './moduls/look.js'

Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        news,
        look
    },
    getters
});
export default store;
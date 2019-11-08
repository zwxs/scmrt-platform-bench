/* eslint-disable func-call-spacing,prefer-promise-reject-errors */
import axios from 'axios'
import store from '../store'
// import router from "../router"
// import { Dialog, Toast } from 'vant';
axios.defaults.baseURL = process.env.VUE_APP_URL  // API 地址
const instance = axios.create({
    // baseURL: '/ad',
    // baseURL: '/v1',//本地
    withCredentials: true, // 跨域类型时是否在请求中协带cookie
    headers: {
        'Content-Type': 'application/json'
    }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    if (store.getters.token) {
        config.headers['token'] = store.getters.token
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    const res = response.data
    if (res.code == '401') {
        //登录失效
        // Dialog.alert({
        //     message: '登录超时，请重新登录！'
        // }).then(() => {
        //     router.push('/login')
        // });
        return Promise.reject(error)
    } else {
        // 对响应数据做点什么
        return response;
    }
}, function (error) {
    // 对响应错误做点什么
    let errs = error.response.data
    // Toast.fail(errs.msg)
    return Promise.reject(error);
});
export default class HttpUtil {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params
            }).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })
            })
        })
    }
    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })

            })
        })
    }
    static delete(url, params = {}, config = {
        'Content-Type': 'application/json'
    }) {
        return new Promise((resolve, reject) => {
            instance.delete(url, params, config).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })
            })
        })
    }
}
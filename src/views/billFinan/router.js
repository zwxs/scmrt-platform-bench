import Vue from 'vue'
import Router from 'vue-router'


// 集成到vue
Vue.use(Router)

const yinshou = () => import('./page/yinshou/yinshou')
const detail = () => import('./page/detail/detail')
const router = new Router({
  scrollBehavior: () => ({

    y: 0
  }),
  routes: [{
    path: '/',
    redirect: '/yinshou',
    name: 'yinshou',
    component: yinshou,
    meta: {
      title: '瑞通供应链金融_商业承兑汇票贴现_企业信贷_商业保理_供应链金融服务平台',
      content: {
        keywords: '供应链金融，票据贴现，企业信贷，银行承兑汇票，商业承兑汇票，应收账款,  票据融资',
        description: '瑞通供应链金融服务平台运用科技大数据风控，为企业提供商业承兑汇票贴现、企业信贷、商业保理一站式供应链金融服务，加快企业资金回流，快速解决企业资金难题，高效助力实体企业的发展。'
      }
    }
  }, {
    path: '/yinshou',
    name: 'yinshou',
    component: yinshou,
    meta: {
      title: '瑞通供应链金融_商业承兑汇票贴现_企业信贷_商业保理_供应链金融服务平台',
      content: {
        keywords: '供应链金融，票据贴现，企业信贷，银行承兑汇票，商业承兑汇票，应收账款,  票据融资',
        description: '瑞通供应链金融服务平台运用科技大数据风控，为企业提供商业承兑汇票贴现、企业信贷、商业保理一站式供应链金融服务，加快企业资金回流，快速解决企业资金难题，高效助力实体企业的发展。'
      }
    }
  },, {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: '瑞通供应链金融_商业承兑汇票贴现_企业信贷_商业保理_供应链金融服务平台',
      content: {
        keywords: '供应链金融，票据贴现，企业信贷，银行承兑汇票，商业承兑汇票，应收账款,  票据融资',
        description: '瑞通供应链金融服务平台运用科技大数据风控，为企业提供商业承兑汇票贴现、企业信贷、商业保理一站式供应链金融服务，加快企业资金回流，快速解决企业资金难题，高效助力实体企业的发展。'
      }
    }
  }]
})
router.beforeEach((to, from, next) => {
  if (to.path == '/index') {
    // if (!store.getters.token) {
    //     next('/login')
    // } else {
    //     next()
    // }
    next()
  } else {
    next()
  }
})
export default router

import Vue from 'vue'
import Router from 'vue-router'


// 集成到vue
Vue.use(Router)

const index = () => import('./page/index/index')
const login = () => import('./page/login')
const forgetpas = () => import('./page/forgetpas')
const register = () => import('./page/register')
const newsHome = () => import('./page/newHome/index')
const newsList = () => import('./page/newsList/index')
const bill = () => import('./page/bill/index')
const billHall = () => import('./page/bill/billHall')
const billDetail = () => import('./page/bill/billDetail')
const newDetail = () => import('./page/newDetail/index')
const aboutUs = () => import('./page/aboutUs/index')
const helpCenter = () => import('./page/helpCenter/index')
const router = new Router({
  scrollBehavior: () => ({

    y: 0
  }),
  routes: [{
    path: '/',
    redirect: '/index',
    name: 'index',
    component: index,
    meta: {
      title: '瑞通供应链金融_商业承兑汇票贴现_企业信贷_商业保理_供应链金融服务平台',
      content: {
        keywords: '供应链金融，票据贴现，企业信贷，银行承兑汇票，商业承兑汇票，应收账款,  票据融资',
        description: '瑞通供应链金融服务平台运用科技大数据风控，为企业提供商业承兑汇票贴现、企业信贷、商业保理一站式供应链金融服务，加快企业资金回流，快速解决企业资金难题，高效助力实体企业的发展。'
      }
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      title: '瑞通供应链金融_商业承兑汇票贴现_企业信贷_商业保理_供应链金融服务平台',
      content: {
        keywords: '供应链金融，票据贴现，企业信贷，银行承兑汇票，商业承兑汇票，应收账款,  票据融资',
        description: '瑞通供应链金融服务平台运用科技大数据风控，为企业提供商业承兑汇票贴现、企业信贷、商业保理一站式供应链金融服务，加快企业资金回流，快速解决企业资金难题，高效助力实体企业的发展。'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/forgetpas',
    name: 'forgetpas',
    component: forgetpas,
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/new',
    name: 'new',
    component: newsHome,
    meta: {
      title: '供应链金融_商业汇票贴现_商业保理__企业信贷-瑞通',
      content: {
        keywords: '供应链金融,供应链金融知识,  票据融资知识,商业保理知识,贸易融资知识,企业信贷知识',
        description: '瑞通供应链金融资讯为您提供海量的供应链金融知识,  商业保理知识，票据融资知识，贸易融资知识，让您更快速了解供应链金融行业的发展。瑞通供应链金融平台致力于供应链金融，商业保理,  商业汇票贴现，应收付账款，企业信贷一站式的供应链金融服务!'
      }
    }
  },
  {
    path: '/newlist',
    name: 'newlist',
    component: newsList,
    meta: {
      title: '瑞通新闻'
    }
  }, {

    path: '/bill',
    name: 'bill',
    component: bill,
    meta: {
      title: '瑞通票据服务-票据贴现_银行承兑汇票_商业承兑汇票_商业保理',
      content: {
        keywords: '票据贴现,银行承兑汇票,商业承兑汇票,票据质押,商业保理',
        description: '瑞通票据信息服务平台全面提供电子商业承兑汇票贴现服务，满足各类银行承兑汇票,商业承兑汇票资金方入驻，流程简  ,成本低,快速匹配交易，为企业提供优质快捷线上商业汇票流转服务!'
      }
    }
  }, {
    path: '/billHall',
    name: 'billHall',
    component: billHall,
    meta: {
      title: '瑞通票据服务-票据贴现_银行承兑汇票_商业承兑汇票_商业保理',
      content: {
        keywords: '票据贴现,银行承兑汇票,商业承兑汇票,票据质押,商业保理',
        description: '瑞通票据信息服务平台全面提供电子商业承兑汇票贴现服务，满足各类银行承兑汇票,商业承兑汇票资金方入驻，流程简  ,成本低,快速匹配交易，为企业提供优质快捷线上商业汇票流转服务!'
      }
    }
  }, {
    path: '/billDetail',
    name: 'billDetail',
    component: billDetail

  }, {
    path: '/newdetail',
    name: 'newdetail',
    component: newDetail,
    meta: {
      title: '票据融资'
    }
  },
  {
    path: '/us',
    name: 'aboutUs',
    component: aboutUs,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/help',
    name: 'helpCenter',
    component: helpCenter,
    meta: {
      title: '帮助中心'
    }
  }
  ]
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

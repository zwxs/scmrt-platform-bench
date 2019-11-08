import HttpUtils from './http'
class Https {
  getTopNotice = (params) => HttpUtils.get('/news/notice', params) // 顶部公告
  getSlide = (params) => HttpUtils.get('/home/getSlide', params) // 查询图片
  getProductInfo = (params) => HttpUtils.get('/home/getProductInfo', params) // 首页企业信用贷推荐数据
  getNotice = (params) => HttpUtils.get('/home/getNotice', params) // 首页贺报
  getHomeData = (params) => HttpUtils.get('/home/getHomeData', params) // 首页资金 企业 成交额 数据
  getCooperateEnterpri = (params) => HttpUtils.get('/home/getCooperateEnterpri', params) // 首页 底部 合作机构
  getCompany = (params) => HttpUtils.get('/home/getCompany', params) // 首页 入驻企业
  getBottomNav = (params) => HttpUtils.get('/home/getBottomNav', params) // 底部导航

  getHomeBillInfo = (params) => HttpUtils.get('/home/getHomeBillInfo', params) // 票据: 信息
  getHomeBillNotice = (params) => HttpUtils.get('/home/getHomeBillNotice', params) // 票据：实时成交行情
  getTransData = (params) => HttpUtils.get('/home/getTransData', params) // 票据: 交易信息
  getQueryTicket = (params) => HttpUtils.get('/home/queryTicket', params) // 交易大厅 票据信息

  getTicketFirstDeal = (params) => HttpUtils.get('/ticket/firstDeal', params) // 查询首页票据实时成交行情
  getPlatformPrice = (params) => HttpUtils.get('/ticket/getPlatformPrice', params) // 查询平台价格
  getTicketHall = (params) => HttpUtils.post('/ticket/hall', params) // 查询票据交易
  getTicketPush = (params) => HttpUtils.get('/ticket/push', params) // 查询首页票据实时成交行情
  getTicketTransAmt = (params) => HttpUtils.get('/ticket/transAmt', params) // 查询票据融资成交数据

  

  getNewsByClass = (params) => HttpUtils.post('/news/byClass', params) // 根据新闻分类获取标题列表
  getNewsClass = (params) => HttpUtils.get('/news/class', params) // 获取新闻分类列表
  getNewsHome = (params) => HttpUtils.get('/news/home', params) // 查询新闻首页
  getNewsNotice = (params) => HttpUtils.get('/news/notice',params) //查询瑞通公告
  getQueryNews = (parmas) => HttpUtils.get('/news/queryNews',parmas) //新闻资讯
  getNewsDetail =(parmas) => HttpUtils.get('/news/queryNews/'+parmas) //新闻资讯
  getHelpClassfiy= (parmas) => HttpUtils.get('/home/getHelpClassfiy',parmas) //帮助中心分类
  getHelpContent =(parmas) => HttpUtils.get('/home/getHelpContent',parmas)
}
export default new Https()

export const reqQueryNews= (parmas) => HttpUtils.get('/news/queryNews',parmas) //新闻资讯
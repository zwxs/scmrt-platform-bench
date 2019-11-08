import {
  reqQueryNews
} from '@/http/index.js'
const state={
  queryNewList:[]
}
const mutations={
  // 新闻资讯
  SET_QUERY_NEWS:(state,queryNewList) =>{
    state.queryNewList=queryNewList
  },
}
const actions={
  // 异步获取新闻资讯
  async getQueryNews({commit}){
    const result=await reqQueryNews()
    if(result.code===200){
        const queryNewList=result.data
        commit('SET_QUERY_NEWS',queryNewList)
    }
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
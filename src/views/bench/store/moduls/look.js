
const state = {
  showLook: false,
  current: 1,
  tabData: []
}
const mutations = {
  SET_SHOW_LOOK: (state, showLook) => {
    state.showLook = showLook
  },
  SET_TAB_DATA: (state, tabData) => {
    console.log(state);
    state.tabData = tabData
  },
}
const actions = {
  // 异步获取敬请期待
  async getShowLook({ commit }, showLook) {

    commit('SET_SHOW_LOOK', showLook)

  },
  // 异步获取敬请期待
  async getTabData({ commit }, tabData) {

    commit('SET_TAB_DATA', tabData)

  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
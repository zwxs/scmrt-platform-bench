
const state = {
  showLook: false,
  current: 1
}
const mutations = {
  SET_SHOW_LOOK: (state, showLook) => {
    state.showLook = showLook
  },
}
const actions = {
  // 异步获取敬请期待
  async getShowLook({ commit }, showLook) {

    commit('SET_SHOW_LOOK', showLook)

  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
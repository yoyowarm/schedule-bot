import { getMembers } from '../../api/member'

export default {
  namespaced: true,
  state: {
    members: []
  },
  mutations: {
    SET_MEMBERS (state, data) {
      state.members = data
    }
  },
  actions: {
    async getMembers ({ dispatch }) {
      const member = await getMembers()
      dispatch('setMembers', member)
    },
    setMembers ({ commit }, data) {
      commit('SET_MEMBERS', data)
    }
  }
}

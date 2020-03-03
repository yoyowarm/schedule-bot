import Vue from 'vue'
import Vuex from 'vuex'
import member from './members'

Vue.use(Vuex)
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      member
    }
  })
  return Store
}

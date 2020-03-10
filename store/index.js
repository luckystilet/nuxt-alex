export const state = ()=>({
  token: null
})

export const mutations = {
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({dispatch}){ // Запускается только 1 раз, когда сервер стартует
    console.log("nuxtServerInit",       );
  },
  login({commit}){
    commit('setToken', 'truetoken')
  },
  logout({commit}){
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}

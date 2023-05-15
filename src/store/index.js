import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        checkoutStatus: []
    },
    getters: {},
    mutations: {
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        }
    },
    actions: {},
    modules: {}
})

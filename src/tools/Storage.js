import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            username: "",
            userPassword: "",
        }
    },
    getters: {
        isLogin: (state) => {
            return state.username.length > 0
        }
    },
    mutations: {
        clearUserInfo (state) {
            state.username = ""
            state.userPassword = ""
        },
        registerUserInfo (state, { username, password }) {
            state.username = username
            state.userPassword = password
        }
    }
})

export default store
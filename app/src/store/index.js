import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dark: true,
        list: null
    },
    mutations: {
        dark(state, payload) {
            state.dark = payload;
        },
        list(state, payload) {
            state.list = payload;
        }
    },
    actions: {
        load(context) {
            return new Promise((resolve) => {
                axios
                    .get(window.api + 'list')
                    .then(r => {
                        context.commit('list', r.data);
                        resolve()
                    })
                    .catch(err => {
                        console.log(err)
                    })

            });
        }
    },
    modules: {}
});

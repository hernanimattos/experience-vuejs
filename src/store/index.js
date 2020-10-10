import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../provider';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
	},
	mutations: {
		getAllProducts(state, payload) {
			state.products = payload;
		},
	},
	actions: {
		async getAllProducts({ commit }, _) {
			const response = await HTTP.get();
			commit('getAllProducts', response.data);
		},
	},
	getters: {},
	modules: {},
});

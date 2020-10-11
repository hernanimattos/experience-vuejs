import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../provider';

import * as allStore from '../views/*/store/index.js';

console.log({ ...allStore });

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
	state: {
		allProducts: [],
	},
	mutations: {
		setAllProducts(state, payload) {
			state.allProducts = payload;
		},
	},
	actions: {
		async getAllProducts({ commit }, _) {
			const response = await HTTP.get();
			commit('setAllProducts', response.data);
		},
	},
	modules: {
		...allStore,
	},
});

export default store;

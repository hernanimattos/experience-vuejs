import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../provider';

import * as allStore from '../views/*/store/index.js';

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
		// eslint-disable-next-line no-unused-vars
		async getAllProducts({ commit }, _) {
			const response = await HTTP.get();
			commit('setAllProducts', response.data);
		},
	},
	getters: {
		globalProducts(state) {
			const filterUsableAreasValid = (prod) => prod.usableAreas > 0;
			const filterLatAndLonZeroValues = (prod) =>
				prod.address.geoLocation.location.lat != 0 &&
				prod.address.geoLocation.location.lon != 0;
			return state.allProducts.filter((prod) => {
				return filterUsableAreasValid(prod) && filterLatAndLonZeroValues(prod);
			});
		},
	},
	modules: {
		...allStore,
	},
});

export default store;

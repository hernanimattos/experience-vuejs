const actions = {
	getProductById({ commit, getters }, id) {
		const { filterZapGroupProducts } = getters;
		const product = filterZapGroupProducts.find((prod) => prod.id === id);
		commit('prodDetails', product);
	},
};

export { actions as default };

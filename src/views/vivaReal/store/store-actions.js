const actions = {
	getProductById({ commit, getters }, id) {
		const { filterVivaRealProducts } = getters;
		const product = filterVivaRealProducts.find((prod) => prod.id === id);
		console.log(product, 'kkkk');
		commit('prodDetails', product);
	},
};

export { actions as default };

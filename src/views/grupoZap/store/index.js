const grupoZap = {
	namespaced: true,
	state: {
		products: [],
	},
	getters: {
		filterZapProducts(state, _, rootState) {
			const { allProducts } = rootState;
			const filterConditions = {
				businessType: 'RENTAL',
				rentalTotalPrice: 'SALE',
				usableAreas: 0,
			};

			console.log(rootState);

			return rootState;
		},
	},
};
export { grupoZap as default };

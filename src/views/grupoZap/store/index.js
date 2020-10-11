const grupoZap = {
	namespaced: true,
	state: {
		products: [],
	},
	getters: {
		filterZapProducts(state, _, rootState) {
			const filterConditions = {
				businessType: 'RENTAL',
				rentalTotalPrice: 'SALE',
				usableAreas: 0,
				geolocation: {
					lat: 0,
					lon: 0,
				},
				boundingBox: {
					minlon: -46.693419,
					minlat: -23.568704,
					maxlon: -46.641146,
					maxlat: -23.546686,
				},
			};
			const { allProducts } = rootState;
			console.log(rootState);

			return rootState;
		},
	},
};
export { grupoZap as default };

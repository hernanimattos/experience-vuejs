import {
	filterMinValueForSale,
	minValueExeptionForSale,
} from '../utils/index.js';

import {
	filterMinLon,
	filterMaxLon,
	filterMaxLat,
	filterMinLat,
	paginate,
} from '../../utils/index.js';

const grupoZap = {
	namespaced: true,
	state: {
		productDetails: {},
	},
	mutations: {
		prodDetails(state, payload) {
			state.productDetails = payload;
		},
	},
	actions: {
		getProductById({ commit, getters }, id) {
			const { filterZapGroupProducts } = getters;
			const product = filterZapGroupProducts.find((prod) => prod.id === id);

			commit('prodDetails', product);
		},
	},
	getters: {
		filterZapGroupProducts(state, getters, rootState, rootGetters) {
			const conditions = {
				minValue: 3500,
				businessType: 'SALE',
			};
			const { globalProducts } = rootGetters;

			const prodForSale = globalProducts.filter(
				(prod) => prod.pricingInfos.businessType === conditions.businessType,
			);

			return prodForSale.filter((prod) => {
				if (
					(filterMinLon({ minLon: prod.address.geoLocation.location.lon }) &&
						filterMinLat({ minLat: prod.address.geoLocation.location.lat }) &&
						filterMaxLon({ maxLon: prod.address.geoLocation.location.lon }) &&
						filterMaxLat({ maxLat: prod.address.geoLocation.location.lat }) &&
						minValueExeptionForSale({
							limitValue: conditions.minValue,
							price: prod.pricingInfos.price,
							usableArea: prod.usableAreas,
						})) ||
					filterMinValueForSale({
						limitValue: conditions.minValue,
						price: prod.pricingInfos.price,
						usableArea: prod.usableAreas,
					})
				) {
					prod.grupZap = true;
					return prod;
				}
			});
		},
		paginate(state, getters) {
			const { filterZapGroupProducts } = getters;
			const chunck = paginate(filterZapGroupProducts, 20);
			return chunck;
		},
	},
};
export { grupoZap as default };

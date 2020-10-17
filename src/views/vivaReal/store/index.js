import { filterMinValue } from '../utils/index.js';

import {
	filterMinLon,
	filterMaxLon,
	filterMaxLat,
	filterMinLat,
	paginate,
} from '../../utils/index.js';

const vivaReal = {
	namespaced: true,
	name: '',
	state: {
		products: [],
	},
	getters: {
		filterVivaRealProducts(state, getters, rootState, rootGetters) {
			const { globalProducts } = rootGetters;
			const rentalproducts = globalProducts.filter(
				(prod) => prod.pricingInfos.businessType === 'RENTAL',
			);
			return rentalproducts.filter((prod) => {
				if (
					(filterMinLon({ minLon: prod.address.geoLocation.location.lon }) &&
						filterMinLat({ minLat: prod.address.geoLocation.location.lat }) &&
						filterMaxLon({ maxLon: prod.address.geoLocation.location.lon }) &&
						filterMaxLat({ maxLat: prod.address.geoLocation.location.lat }) &&
						filterMinValue({
							monthlyCondoFee: prod.pricingInfos.monthlyCondoFee,
							rentalTotalPrice: prod.pricingInfos.rentalTotalPrice,
							valuePercentage: 50,
						})) ||
					filterMinValue({
						monthlyCondoFee: prod.pricingInfos.monthlyCondoFee,
						rentalTotalPrice: prod.pricingInfos.rentalTotalPrice,
						valuePercentage: 30,
					})
				) {
					prod.vivaReal = true;
					return prod;
				}
			});
		},
		paginate(state, getters) {
			const { filterVivaRealProducts } = getters;
			const chunck = paginate(filterVivaRealProducts, 20);
			return chunck;
		},
	},
};
export { vivaReal as default };

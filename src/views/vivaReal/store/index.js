import { filterMinValue } from '../utils/valueRule';
import {
	filterMinLon,
	filterMaxLon,
	filterMaxLat,
	filterMinLat,
} from '../../utils/bundBoxConditions';

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
	},
};
export { vivaReal as default };

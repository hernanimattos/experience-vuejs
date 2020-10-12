import {
	filterMinValueForSale,
	minValueExeptionForSale,
} from '../utils/valueRule';

import {
	filterMinLon,
	filterMaxLon,
	filterMaxLat,
	filterMinLat,
} from '../../utils/bundBoxConditions';

const grupoZap = {
	namespaced: true,
	getters: {
		filterZapGroupProducts(store, getters, rootState, rootGetters) {
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
	},
};
export { grupoZap as default };

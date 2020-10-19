import * as store from './store-*.js';
const vivaReal = {
	namespaced: true,
	name: 'vivaReal',
	state: {
		productDetails: [],
	},
	...store,
};
export { vivaReal as default };

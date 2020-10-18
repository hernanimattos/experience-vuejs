import * as store from './store-*.js';
const vivaReal = {
	namespaced: true,
	name: 'vivaReal',
	state: {
		products: [],
	},
	...store,
};
export { vivaReal as default };

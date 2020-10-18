import * as store from './store-*.js';

const grupoZap = {
	namespaced: true,
	name: 'grupoZap',
	state: {
		productDetails: {},
	},
	...store,
};
export { grupoZap as default };

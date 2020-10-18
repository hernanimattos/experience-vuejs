import { shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductDetails from './ProductDetails.vue';
import Card from '@/components/ui/Card';
describe('teste details component', () => {
	let wrapper;
	let vm;
	let actions;
	beforeEach(() => {
		actions = {
			getProductById: jest.fn(),
		};
		const store = new Vuex.Store({
			state: {
				allProducts: [
					{
						id: 1,
					},
					{
						id: 2,
					},
					{
						id: 3,
					},
				],
			},
			modules: {
				grupoZap: {
					name: 'grupoZap',
					namespaced: true,
					state: {
						productDetails: {},
					},
					actions,
				},
			},
		});
		wrapper = shallowMount(ProductDetails, {
			store,
			mocks: {
				$route: {
					params: {},
				},
			},
		});
		vm = wrapper.vm;
	});
	it('experect getProductById be called', () => {
		if (vm.$route.params.id) {
			expect(actions.getProductById).toBeCalled();
		}
	});
	it('expect getProductById not be called', () => {
		expect(actions.getProductById).not.toBeCalled();
	});
	it('expect prodDetails contain Card component', () => {
		expect(wrapper.findComponent(Card)).toBeTruthy();
	});
});

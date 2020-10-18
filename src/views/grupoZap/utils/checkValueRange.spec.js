import { valuePerUsableArea, filterMinValueForSale } from './checkValueRange';

describe('Check value rule', () => {
	it('expect false ', () => {
		const params = {
			price: 1200,
			usableArea: 30,
			limitValue: 200,
		};

		expect(filterMinValueForSale(params)).toBe(false);
	});
	it('expect 17 ', () => {
		const params = {
			price: 1200,
			usableArea: 70,
		};
		expect(valuePerUsableArea(params)).toBe(17);
	});
});

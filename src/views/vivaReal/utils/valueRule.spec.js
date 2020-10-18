import { filterMinValue } from './valueRule';
describe('The value  monthlyCondoFee not bemore then 30% of rentalTotalPrice ', () => {
	it('expect true ', () => {
		const params = {
			rentalTotalPrice: 1200,
			monthlyCondoFee: 359,
			valuePercentage: 30,
		};
		expect(filterMinValue(params)).toBe(true);
	});
	it('expect false ', () => {
		const params = {
			rentalTotalPrice: 1200,
			monthlyCondoFee: 360,
			valuePercentage: 30,
		};
		expect(filterMinValue(params)).toBe(false);
	});
});

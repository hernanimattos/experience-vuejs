import { checkInvalidAndNaN } from './checkInvalidAndNaN';

describe('The value do not be invalid and need be a number', () => {
	it('expect true ', () => {
		const params = {
			monthlyCondoFee: 359,
		};
		expect(checkInvalidAndNaN(params)).toBe(true);
	});
	it('expect false ', () => {
		const params = {
			monthlyCondoFee: '',
		};
		expect(checkInvalidAndNaN(params)).toBe(false);
	});
});

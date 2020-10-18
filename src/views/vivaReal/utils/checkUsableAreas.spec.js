import { checkUsableAreas } from './checkUsableAreas';

describe('Check the rule of usable area be major 0', () => {
	it('expect false ', () => {
		const params = {
			usableArea: 0,
		};
		expect(checkUsableAreas(params)).toBe(false);
	});
	it('expect true ', () => {
		const params = {
			usableArea: 1,
		};
		expect(checkUsableAreas(params)).toBe(true);
	});
});

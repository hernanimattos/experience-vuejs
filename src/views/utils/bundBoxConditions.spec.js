import {
	filterMinLon,
	filterMaxLon,
	filterMaxLat,
	filterMinLat,
} from './bundBoxConditions';

describe('test Boundox Conditions', () => {
	it('expect return true with checked the minLon value ', () => {
		const param = {
			minLon: -46.693418,
		};
		expect(filterMinLon(param)).toBe(true);
	});
	it('expect return true with checked the maxLon value', () => {
		const param = {
			maxLon: -46.641145,
		};
		expect(filterMaxLon(param)).toBe(true);
	});
	it('expect return true with checked the maxLat value', () => {
		const param = {
			maxLat: -23.546687,
		};
		expect(filterMaxLat(param)).toBe(true);
	});
	it('expect return true with checked the minLat value', () => {
		const param = {
			minLat: -23.568703,
		};
		expect(filterMinLat(param)).toBe(true);
	});
	it('expect return false with checked the minLon value ', () => {
		const param = {
			minLon: -46.693419,
		};
		expect(filterMinLon(param)).toBe(false);
	});
	it('expect return false with checked the maxLon value', () => {
		const param = {
			maxLon: -46.641146,
		};
		expect(filterMaxLon(param)).toBe(false);
	});
	it('expect return false with checked the maxLat value', () => {
		const param = {
			maxLat: -23.546686,
		};
		expect(filterMaxLat(param)).toBe(false);
	});
	it('expect return false with checked the minLat value', () => {
		const param = {
			minLat: -23.568704,
		};
		expect(filterMinLat(param)).toBe(false);
	});
});

import { default as getters } from './store-getters.js';

describe('teste getters', () => {
	const data = global.mockData;
	const state = {};
	const rootState = {};
	const gettersMock = { filterVivaRealProducts: data };
	const rootGetters = {
		globalProducts: data,
	};

	it('expect filter data', () => {
		const result = getters.filterVivaRealProducts(
			state,
			gettersMock,
			rootState,
			rootGetters,
		);

		expect(result).toEqual([
			{
				address: {
					city: 'São Paulo',
					geoLocation: {
						location: { lat: -23.553518, lon: -46.659002 },
						precision: 'ROOFTOP',
					},
					neighborhood: 'Campo Belo',
				},
				bathrooms: 3,
				bedrooms: 3,
				createdAt: '2018-05-08T00:29:38.179Z',
				id: 'fed26dbe5881',
				images: [
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
				],
				listingStatus: 'ACTIVE',
				listingType: 'USED',
				owner: false,
				parkingSpaces: 1,
				pricingInfos: {
					businessType: 'RENTAL',
					monthlyCondoFee: '940',
					period: 'MONTHLY',
					price: '3500',
					rentalTotalPrice: '4440',
					yearlyIptu: '810',
				},
				updatedAt: '2018-05-08T00:29:38.179Z',
				usableAreas: 77,
				vivaReal: true,
			},
			{
				address: {
					city: 'São Paulo',
					geoLocation: {
						location: { lat: -23.501005, lon: -46.723175 },
						precision: 'ROOFTOP',
					},
					neighborhood: 'Jardim Íris',
				},
				bathrooms: 1,
				bedrooms: 2,
				createdAt: '2018-03-26T14:26:20.327Z',
				id: '548289d0d1df',
				images: [
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
				],
				listingStatus: 'ACTIVE',
				listingType: 'USED',
				owner: false,
				parkingSpaces: 1,
				pricingInfos: {
					businessType: 'RENTAL',
					monthlyCondoFee: '260',
					period: 'MONTHLY',
					price: '1200',
					rentalTotalPrice: '1460',
					yearlyIptu: '0',
				},
				updatedAt: '2018-03-26T14:26:20.327Z',
				usableAreas: 45,
				vivaReal: true,
			},
			{
				address: {
					city: 'São Paulo',
					geoLocation: {
						location: { lat: -23.609952, lon: -46.732226 },
						precision: 'ROOFTOP',
					},
					neighborhood: 'Vila Suzana',
				},
				bathrooms: 3,
				bedrooms: 3,
				createdAt: '2018-05-17T19:06:46.575Z',
				id: 'd8849cae5766',
				images: [
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
					'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
				],
				listingStatus: 'ACTIVE',
				listingType: 'USED',
				owner: false,
				parkingSpaces: 2,
				pricingInfos: {
					businessType: 'RENTAL',
					monthlyCondoFee: '0',
					period: 'MONTHLY',
					price: '4990',
					rentalTotalPrice: '4990',
					yearlyIptu: '0',
				},
				updatedAt: '2018-05-17T19:06:46.575Z',
				usableAreas: 103,
				vivaReal: true,
			},
		]);
	});
	it('expect chunk data', () => {
		expect(getters.paginate(state, gettersMock)).toHaveLength(1);
	});
});

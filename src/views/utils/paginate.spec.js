import { default as paginate } from './paginate';

describe('test chunk paginate', () => {
	it('expect return 3', () => {
		const dados = [
			{
				_id: '5f8b2b133b830f481ecd6cfa',
			},
			{
				_id: '5f8b2b1311baac0f47ddf7f1',
			},
			{
				_id: '5f8b2b13ec73ac00077d960d',
			},
			{
				_id: '5f8b2b13fd822a018246698d',
			},
			{
				_id: '5f8b2b13536b733d341618b2',
			},
			{
				_id: '5f8b2b13adc479b1364b00f2',
			},
			{
				_id: '5f8b2b13a35afb1f46f787a3',
			},
			{
				_id: '5f8b2b13ebbb092650bfb33e',
			},
			{
				_id: '5f8b2b13e42c8a5476d24d61',
			},
			{
				_id: '5f8b2b13dc0ff2c3b25b98e2',
			},
			{
				_id: '5f8b2b1379b00a15694b8e71',
			},
			{
				_id: '5f8b2b139e76f76301d3b54a',
			},
			{
				_id: '5f8b2b1354ffe9d1e6749abd',
			},
			{
				_id: '5f8b2b135fa7f81fd395b37c',
			},
			{
				_id: '5f8b2b130da7e0e0d91cd8c7',
			},
			{
				_id: '5f8b2b132165c97c6a34cfc0',
			},
			{
				_id: '5f8b2b130b261c5b7da9b3c6',
			},
			{
				_id: '5f8b2b13d5161aaf764c4f82',
			},
			{
				_id: '5f8b2b133225f751a315a3ef',
			},
			{
				_id: '5f8b2b13aba9258045755b92',
			},
			{
				_id: '5f8b2b13986d15e9c63c7556',
			},
			{
				_id: '5f8b2b13ad3783989c5948c5',
			},
			{
				_id: '5f8b2b1397e4ea98204e5155',
			},
			{
				_id: '5f8b2b135cab4a6b077ff199',
			},
			{
				_id: '5f8b2b13d7ace433c3287e71',
			},
			{
				_id: '5f8b2b13ca7d045da10c7d22',
			},
			{
				_id: '5f8b2b13348a83c03c9a7243',
			},
			{
				_id: '5f8b2b132fc0e493a4ef6167',
			},
			{
				_id: '5f8b2b13b466351ac3409414',
			},
			{
				_id: '5f8b2b13c58f62b4cf9d3afe',
			},
			{
				_id: '5f8b2b13c272dfadaba16e77',
			},
			{
				_id: '5f8b2b135e3e0c7a27b1f25c',
			},
			{
				_id: '5f8b2b13766f19a11cb440f5',
			},
			{
				_id: '5f8b2b13a616500a81733438',
			},
			{
				_id: '5f8b2b134df20c2c2229a5b9',
			},
			{
				_id: '5f8b2b13f4d648bee7ae67c2',
			},
			{
				_id: '5f8b2b13cd230cd25ba5331f',
			},
			{
				_id: '5f8b2b13f6765c4de5ac1886',
			},
			{
				_id: '5f8b2b13ff5d6f593120ba82',
			},
			{
				_id: '5f8b2b13f72ee52d27335dc1',
			},
			{
				_id: '5f8b2b1329fea198b0f08e09',
			},
			{
				_id: '5f8b2b13d824e1915fdfa097',
			},
			{
				_id: '5f8b2b1327bba21a4511fc6d',
			},
		];

		const size = paginate(dados, 20);

		expect(size).toHaveLength(3);
	});
});

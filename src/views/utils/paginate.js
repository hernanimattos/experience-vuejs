import _ from 'lodash';
const paginate = (dataLake, range) => {
	const dataChunked = _.chunk(dataLake, range);
	return dataChunked;
};

export { paginate as default };

const boundingBox = {
	minlon: -46.693419,
	minlat: -23.568704,
	maxlon: -46.641146,
	maxlat: -23.546686,
};

const filterLatAndLonZeroValues = (dados) => {
	return dados.filter((prod) => {
		return (
			prod.address.geoLocation.location.lat !== 0 &&
			prod.address.geoLocation.location.lon !== 0
		);
	});
};

const filterMinLon = (dados) => {
	return dados.filter((prod) => {
		return (
			parseFloat(boundingBox.minlon) <
			parseFloat(prod.address.geoLocation.location.lon)
		);
	});
};

const filterMaxLon = (dados) => {
	return dados.filter((prod) => {
		return (
			parseFloat(boundingBox.maxlon) >
			parseFloat(prod.address.geoLocation.location.lon)
		);
	});
};

const filterMinLat = (dados) => {
	return dados.filter((prod) => {
		return (
			parseFloat(boundingBox.minlat) <
			parseFloat(prod.address.geoLocation.location.lat)
		);
	});
};

const filterMaxLat = (dados) => {
	return dados.filter((prod) => {
		return (
			parseFloat(boundingBox.maxlat) >
			parseFloat(prod.address.geoLocation.location.lat)
		);
	});
};

const filterResult = (dados) => {
	const removedLatAndLonZero = filterLatAndLonZeroValues(dados);
	const minLon = filterMinLon(removedLatAndLonZero);
	const minLat = filterMinLat(minLon);
	const maxLon = filterMaxLon(minLat);
	const maxLat = filterMaxLat(maxLon);
	return maxLat;
};

export { filterLatAndLonZeroValues as default };
export { filterMinLon as default };
export { filterMaxLon as default };
export { filterMaxLat as default };
export { filterMaxLat as default };
export { filterResult as default };

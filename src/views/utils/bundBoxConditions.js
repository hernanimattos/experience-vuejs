const boundingBox = {
	minlon: -46.693419,
	minlat: -23.568704,
	maxlon: -46.641146,
	maxlat: -23.546686,
};

const filterMinLon = ({ minLon }) => {
	return parseFloat(boundingBox.minlon) < parseFloat(minLon);
};

const filterMaxLon = ({ maxLon }) => {
	return parseFloat(boundingBox.maxlon) > parseFloat(maxLon);
};

const filterMinLat = ({ minLat }) => {
	return parseFloat(boundingBox.minlat) < parseFloat(minLat);
};

const filterMaxLat = ({ maxLat }) => {
	return parseFloat(boundingBox.maxlat) > parseFloat(maxLat);
};

export { filterMinLon, filterMaxLon, filterMaxLat, filterMinLat };

const valuePerUsableArea = ({ price, usableArea }) => {
	return parseInt(price / usableArea, 10);
};
const filterMinValueForSale = ({ limitValue, price, usableArea }) => {
	return valuePerUsableArea({ price, usableArea }) > parseInt(limitValue, 10);
};

const minValueExeptionForSale = ({ limitValue, price, usableArea }) => {
	const limitValueParsed = parseInt(limitValue, 10);
	return (
		valuePerUsableArea({ price, usableArea }) >
		limitValueParsed - (limitValueParsed / 100) * 10
	);
};

export { filterMinValueForSale, minValueExeptionForSale, valuePerUsableArea };

const filterMinValue = ({
	rentalTotalPrice,
	monthlyCondoFee,
	valuePercentage,
}) => {
	const rentalTotalPriceParsed = parseInt(rentalTotalPrice, 10);
	const monthlyCondoFeeParsed = parseInt(monthlyCondoFee, 10);
	return (
		(rentalTotalPriceParsed / 100) * valuePercentage > monthlyCondoFeeParsed
	);
};

export { filterMinValue };

const checkInvalidAndNaN = ({ monthlyCondoFee }) => {
	return typeof monthlyCondoFee == 'number';
};

export { checkInvalidAndNaN };

// format date
export const formatDate = (date) => {
	const newDate = new Date();
	const day = newDate.getDay();
	const month = newDate.getMonth();
	const year = newDate.getFullYear();

	return `${formatNumber(day)}/${formatNumber(month)}/${year}`;
};

const formatNumber = (num) => {
	if (num < 10) return `0${num}`;
};

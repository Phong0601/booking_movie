// format date
export const formatDate = (date) => {
	const dateObj = new Date(date);
	const hour = dateObj.getHours();
	const min = dateObj.getMinutes();

	return `${formatNumber(hour)}:${formatNumber(min)}`;
};

const formatNumber = (num) => {
	if (num < 10) return `0${num}`;
	return num;
};

export const getCurrentDay = () => {
	const dateObj = new Date();
	const day = dateObj.getDate();
	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();

	return `${day}/${month}/${year}`;
};

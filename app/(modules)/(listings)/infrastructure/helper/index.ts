export const truncateText = (text: string, maxLength: number) => {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + '..';
	}
	return text;
};

export const formatNumber = (num: number) => {
	return new Intl.NumberFormat('en-US').format(num);
};

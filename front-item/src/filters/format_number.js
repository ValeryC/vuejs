export default {
	init: (number) => {
		if (number.toString().length > 6) {
	  	return (number / Math.pow(10, 6)).toLocaleString() + 'M'
		} else {
			return (number / Math.pow(10, 3)).toLocaleString() + 'K'
		}
	}
}
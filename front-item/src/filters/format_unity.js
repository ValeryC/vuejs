export default {
	init: (number) => {
		if (isNaN(number)) {
            Number(number)
            return number.toLocaleString()
		} else {
			return number.toLocaleString()
		}
	}
}
const stringLength = (str) => {
	if (str.length <1 || str.length>10){
		throw new Error("String must be between 1 and 10 characters!")
	}else {
		return str.length;
	}
}

module.exports = stringLength;
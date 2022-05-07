const stringLength = require('./stringLength');

test('Properly count the length of the input string', () => {
	expect(stringLength('String'))
		.toBe(6);
});

test('Throw an error if string is less than 1 char long', () => {
	expect(() => stringLength(''))
		.toThrow();
});

test('Throw an error if string is more than 10 chars long', () => {
	expect(() => stringLength('Hello I am String'))
		.toThrow(Error);
});
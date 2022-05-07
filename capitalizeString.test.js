const capitalizeString = require('./capitalizeString')

test('capitalizeString', () => {
	expect(capitalizeString('hello world'))
		.toBe('Hello world');
});
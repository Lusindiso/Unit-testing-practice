const reverseString = require('./reverseString');

test('reverseString', () => {
  expect(reverseString('Hello World!'))
    .toBe('!dlroW olleH');
});
const reverseString = require('./reversestring');

test('it reverses the string', () => {
    expect(reverseString('reveRse')).toBe('esRever')
})
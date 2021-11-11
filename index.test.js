const stringLength = require('./index');


test('it returns the character count', () => {
    expect(stringLength('five')).toBe(4)
})

test('it throws error if it does not exist', () => {
    expect(() => stringLength('')).toThrow('your string must be at least 1 character long')
})

test('it throws error if it is more than 10 characters long', () => {
    expect(() => stringLength('morethantencharacters')).toThrow('your string must be at most 10 character long')
})
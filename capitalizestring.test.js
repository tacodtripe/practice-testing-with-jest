const capitalize = require('./capitalizestring')

test('the function gets a string as parameter', () => {
    expect(() => capitalize(132)).toThrow('must provide a string')
})
test('the function capitalize the first letter', () => {
    expect(capitalize('whatever')).toBe('Whatever')
})
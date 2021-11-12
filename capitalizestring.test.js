const capitalize = require('./capitalizestring')

test('the function gets a string as parameter', () => {
    expect(() => capitalize(132)).toThrow('must provide a string')
})
const calc = require('./calculator')

describe('add function tests', () => {
    test('returns 18', ()  => {
        expect(calc.add(10,8)).toBe(18)
    })
    test('returns -1', ()  => {
        expect(calc.add(5,-6)).toBe(-1)
    })
    test('returns 52', ()  => {
        expect(calc.add(-60,112)).toBe(52)
    })
})

describe('substract function tests', () => {
    test('returns -18', ()  => {
        expect(calc.substract(28,10)).toBe(18)
    })
    test('returns 11', ()  => {
        expect(calc.substract(5,-6)).toBe(11)
    })
    test('returns -172', ()  => {
        expect(calc.substract(-60,112)).toBe(-172)
    })
})

describe('multiply function tests', () => {
    test('returns 18', ()  => {
        expect(calc.multiply(2,9)).toBe(18)
    })
    test('returns -1', ()  => {
        expect(calc.multiply(1,-1)).toBe(-1)
    })
    test('returns -120', ()  => {
        expect(calc.multiply(-60,2)).toBe(-120)
    })
})

describe('divide function tests', () => {
    test('returns 18', ()  => {
        expect(calc.divide(36,2)).toBe(18)
    })
    test('returns -1', ()  => {
        expect(calc.divide(10,-10)).toBe(-1)
    })
    test('returns -12', ()  => {
        expect(calc.divide(-24,2)).toBe(-12)
    })
    test('returns 12', ()  => {
        expect(calc.divide(-24,-2)).toBe(12)
    })
    test('throws error', ()  => {
        expect(() => calc.divide(-24,0)).toThrow('Sorry but I ain\'t crashing')
    })
})
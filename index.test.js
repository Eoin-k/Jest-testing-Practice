const formulas = require('./index.js')


test('first string letter to be capitalised',() => {
    expect(formulas.capitalise("paint")).toBe("Paint")
})

test('to be reversed', () => {
    expect(formulas.reverseString('st')).toBe('ts')
})

test('Reverse string', () => {
    expect(formulas.reverseString('abcd')).toBe('dcba');
});

test('add 2 numbers', () => {
    expect(formulas.calculator.add(2,2)).toBe(4)
})

test('subtract 2 numbers', () => {
    expect(formulas.calculator.subtract(5,3)).toBe(2)
})

test('divide 2 numbers', () => {
    expect(formulas.calculator.divide(12,3)).toBe(4)
})

test('multiply 2 numbers', () => {
    expect(formulas.calculator.multiply(5,3)).toBe(15)
})


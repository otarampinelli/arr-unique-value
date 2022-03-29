/* eslint-disable no-undef */
const uniqueValue = require('./index')

test('should return an array without repetead values', () => {
    expect(uniqueValue([1, 1, [2, 2, [3, 3, 3]], [4, 4]])).toEqual([1, [2, [3]], [4]])
})

test('should return an error if the given value is an number', () => {
    expect(() => {
        uniqueValue(1)
    }).toThrow('Must be an array')
})

test('should return an error if the given value is a string', () => {
    expect(() => {
        uniqueValue('1')
    }).toThrow('Must be an array')
})

test('should return an error if the given value is a object', () => {
    expect(() => {
        uniqueValue({
            value: 'test'
        })
    }).toThrow('Must be an array')
}) 
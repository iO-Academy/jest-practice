const functions = require('../functions')

/*
 * Age Calculator tests
 * HINT: You may need to update the dates passed to make these tests work
 */
test('Age is 30', () => {
    expect(functions.ageCaluator('1992-01-01')).toBe(30);
})

test('Age is 0 for current year', () => {
    expect(functions.ageCaluator('2022-01-01')).toBe(0);
})

test('Returns false for future year', () => {
    expect(functions.ageCaluator('2050-01-01')).toBe(false);
})

// Failure test
test('Invalid date returns false', () => {
    expect(functions.ageCaluator('2022-13-01')).toBe(false);
})

// Malformed test
test('Incorrect data type returns false', () => {
    expect(functions.ageCaluator({})).toBe(false);
})

/*
 * Tax Calculator tests
 */
test('Below minimum threshold returns 0 tax', () => {
    expect(functions.taxCalculator(12499)).toBe(0);
})

test('First tax bracket applies 5% tax', () => {
    expect(functions.taxCalculator(12600)).toBe(5);
})

test('Second tax bracket applies 10% tax', () => {
    expect(functions.taxCalculator(30100)).toBe(885);
})

test('Third tax bracket applies 20% tax', () => {
    expect(functions.taxCalculator(50100)).toBe(2895);
})

// Failure test
test('Negative salary returns 0', () => {
    expect(functions.taxCalculator(-100)).toBe(0);
})

// Malformed test
test('Incorrect data type returns 0', () => {
    expect(functions.taxCalculator([])).toBe(0);
})

/*
 * Greet Bot tests
 */
test('Greeting returned with correct name', () => {
    const greeting = functions.greetBot('Mike')
    expect(greeting).toMatch(/Hi Mike./);
})

test('Greeting returned with weather forecast when passing param', () => {
    const greeting = functions.greetBot('Mike', true)
    expect(greeting).toMatch(/Hi Mike. It is/);
})

test('Greeting returned with weather forecast without passing param', () => {
    const greeting = functions.greetBot('Mike')
    expect(greeting).toMatch(/Hi Mike. It is/);
})

test('Greeting returned without weather forecast when passing false param', () => {
    const greeting = functions.greetBot('Mike', false)
    expect(greeting).toMatch(/Hi Mike./);
    expect(greeting).not.toMatch(/Hi Mike. It is/);
})

// Malformed test
test('Anonymous greeting returned with incorrect name param data type', () => {
    const greeting = functions.greetBot([])
    expect(greeting).toMatch(/Hi ./);
})

// Malformed test
test('Greeting returned with weather when passing incorrect data type to weather boolean', () => {
    const greeting = functions.greetBot('Mike', [])
    expect(greeting).toMatch(/Hi Mike. It is/);
})
import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 69;
  const b = 420;
  const expected = 489;
  // Act
  const result = Add(a,b);

  // Assert
  expect(result).toBe(expected);
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 69;
  const b = 420;
  const expected = -351;

  // Act
  const result = Substract(a,b);

  // Assert
  expect(result).toBe(expected);
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 69;
  const b = 420;
  const expected = 28980;

  // Act
  const result = Multiplication(a,b);

  // Assert
  expect(result).toBe(expected);
})
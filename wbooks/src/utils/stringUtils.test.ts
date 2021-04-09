import { getInitials, keepNumbers } from './stringUtils';

describe('function getInitials', () => {
  test('string with uppercase', () => {
    expect(getInitials('Hola Mundo Test')).toBe('H M T');
  });
  test('string with lowercase', () => {
    expect(getInitials('hola mundo test')).toBe('h m t');
  });
  test('string with uppercase and lowercase', () => {
    expect(getInitials('Test combinando Mayusculas y minusculas')).toBe('T c M y m');
  });
  test('string with digits', () => {
    expect(getInitials('Hola 256 test 789')).toBe('H 2 t 7');
  });
  test('undefined argument', () => {
    expect(getInitials()).toBeUndefined();
  });
  test('is not null', () => {
    expect(getInitials()).not.toBeNull();
  });
});

describe('function keepNumbers', () => {
  test('string with digits', () => {
    expect(keepNumbers('abc123')).toBe('123');
  });
  test('string without digits', () => {
    expect(keepNumbers('abc')).toBe('');
  });
  test('string mixed between letters and numbers', () => {
    expect(keepNumbers('Ho la 123 est0 3s 1 t3s1')).toBe('12303131');
  });
  test('string of digits', () => {
    expect(keepNumbers('12345')).toBe('12345');
  });
  test('string of digits with black space', () => {
    expect(keepNumbers('123 45 17')).toBe('1234517');
  });
});

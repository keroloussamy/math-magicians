import operate from '../../logic/operate';

describe('my calculate', () => {
  test('Operation plus numbers', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('Operation minus numbers', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
  test('Operation times numbers', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });
  test('Operation div numbers', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
  test('Operation modulo numbers', () => {
    expect(operate(2, 4, '%')).toBe('2');
  });
});

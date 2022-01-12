import calculate from '../../logic/calculate';

describe('my calculate', () => {
  test('calculate number', () => {
    expect(calculate({}, '9')).toStrictEqual({ next: '9', total: null });
  });

  test('calculate  AC', () => {
    expect(calculate({}, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('calculate  2+3=5', () => {
    expect(calculate({ total: '2', next: '3', operation: '+' }, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  });

  test('calculate  5*6=30', () => {
    expect(calculate({ total: '5', next: '6', operation: 'x' }, '=')).toStrictEqual({ total: '30', next: null, operation: null });
  });
});

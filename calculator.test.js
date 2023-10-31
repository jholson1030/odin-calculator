const { operate, simpleOperate } = require('script.js');

test('should correctly calculate a complex expression', () => {
    const expression = ['12', '+', '7', '-', '5', '*', '3'];
    const result = operate(expression);
    expect(result).toBe('4');
  });
const ConversorBitcoin = require('../js/bitcoin');

test('Verificar se está correto', () => {
  expect(ConversorBitcoin(1)).toBe(303.614);
});

const convertorDeTemperatura = require('../js/index');

test('Verificar se está correto', () => {
  expect(convertorDeTemperatura(100)).toBe(212);
});

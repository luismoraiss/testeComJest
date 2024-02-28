const ComparaSenhas = require("../js/senhas");

test("Verificar se está correto", () => {
  expect(ComparaSenhas(1, 1)).toBe(true);
});

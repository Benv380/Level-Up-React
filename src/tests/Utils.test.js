import { expect } from 'chai';

function sumar(a, b) {
  return a + b;
}

describe('Función de utilidad sumar', () => {
  it('debería sumar dos números correctamente', () => {
    expect(sumar(2, 3)).to.equal(5);
  });
});

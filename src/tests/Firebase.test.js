import { expect } from 'chai';
import * as firebase from '../firebase';

describe('Configuración Firebase', () => {
  it('debería exportar un objeto', () => {
    expect(firebase).to.be.an('object');
  });
});

import { Ordonnance } from './ordonnance';

describe('Ordonnance', () => {
  it('should create an instance', () => {
    const ord= { _id:'',numord:'', prepa:'', telpat:'', texte:'' };
    expect(new Ordonnance(ord)).toBeTruthy();
  });
});

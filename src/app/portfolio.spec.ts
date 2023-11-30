import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  it('should create an instance', () => {
    const portfoliotData = {_id:'', nom: '', prenom: '', email: '', numtel: '', service:'', datee:'', dates:'', prov:'', nums:'', nomme:'', desti:'', comm:'' };    
    expect(new Portfolio(portfoliotData)).toBeTruthy();
  });
});

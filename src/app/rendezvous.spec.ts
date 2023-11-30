import { Rendezvous } from './rendezvous';

describe('Rendezvous', () => {
  it('should create an instance', () => {
    const RendezvoustData = {_id:'', numrend: '', nom:'', prenom: '', email: '', numtel: '', daterend:'', tempsrend:'' };    
    expect(new Rendezvous(RendezvoustData)).toBeTruthy();
  });
});

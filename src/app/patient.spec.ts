import { Patient } from './patient';

describe('Patient', () => {
  it('should create an instance', () => {
    const patientData = {_id:'', nom: '', prenom: '', email: '', numtel: '' };
    expect(new Patient(patientData)).toBeTruthy();
  });
});

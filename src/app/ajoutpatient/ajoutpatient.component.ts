import { Component,Input, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import {Patient} from '../patient';
import {Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ajoutpatient',
  templateUrl: './ajoutpatient.component.html',
  styleUrls: ['./ajoutpatient.component.css']
})
export class AjoutpatientComponent implements OnInit {
patientData = { _id: '',nom: '', prenom: '', email: '', numtel: '' };
patient: Patient = new Patient(this.patientData);
loginForm: FormGroup= new FormGroup({
  nom: new FormControl(),
  prenom: new FormControl(),
  email: new FormControl(),
  numtel: new FormControl()
});
;
  constructor(private patientservice:PatientService,private router:Router,private _route:ActivatedRoute) { }
  ngOnInit(): void {
   
  }

  create(){
    console.log('done')
    let p=new Patient(this.loginForm.value);
   
  this.patientservice.createpatient(p).then(
    res =>{
      console.log(p);
console.log(res);
alert('patient ajouter ');
  this.router.navigate(['/listes']); 
     })

    .catch( error =>{
      console.log(error);
    }
 
  )
  }
  
}


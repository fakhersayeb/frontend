import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from '../patient';
import {PatientService} from '../patient.service';
@Component({
  selector: 'app-modifierpatient',
  templateUrl: './modifierpatient.component.html',
  styleUrls: ['./modifierpatient.component.css']
})
export class Modifierpatientcomponent implements OnInit {
loginform4:FormGroup=new FormGroup({
  nom:new FormControl(),
  prenom:new FormControl(),
  email:new FormControl(),
  numtel:new FormControl()
      });;
patien!: Patient;

idp!: string;nom!: string;prenom!: string;email!: string;numtel!: string;

alert=false;
  constructor(private router:Router,private patientservice:PatientService,private root:ActivatedRoute) {

   this.root.params.subscribe(res=>{
     console.log('params',res)
     this.idp=res['idp']
     this.patien=new Patient(res)
     console.log('one patien',this.patien)
   })
  }
   ngOnInit(): void {
    
     
    if (this.patien) {
      this.loginform4.patchValue({
       nom:this.patien.nom,
       prenom:this.patien.prenom,
       email:this.patien.email,
       numtel:this.patien.numtel
      });
    }
  }
  afficher(){
    this.alert=true;
  }
  update()
  {
    console.log(this.loginform4.value)
   this.nom=this.loginform4.get('nom')?.value ?? '';
   this.prenom= this.loginform4.get('prenom')?.value ?? '';
   this.email=this.loginform4.get('email')?.value ?? '';
   this.numtel=this.loginform4.get('numtel')?.value ?? '';
    this.patientservice.updatepatient(this.idp,this.nom,this.prenom,this.email,this.numtel).then(
      res =>{
     
  console.log(res);
    this.router.navigate(['/listes']); 
       })
  
      .catch( error =>{
        console.log(error);
      }
   
    )
    }
    
  }



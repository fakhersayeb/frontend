import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Portfolio } from '../portfolio';
import {PortfolioService} from '../portfolio.service';
import {Router, ActivatedRoute} from '@angular/router';
import {PatientService} from '../patient.service';
@Component({
  selector: 'app-ajoutpotfolio',
  templateUrl: './ajoutpotfolio.component.html',
  styleUrls: ['./ajoutpotfolio.component.css']
})
export class AjoutportfolioComponent implements OnInit {
  protfolio!: Portfolio;
  loginForm2: FormGroup= new FormGroup({
  nom: new FormControl(),
  prenom: new FormControl(),
  email: new FormControl(),
  numtel: new FormControl(),
  service: new FormControl(),
  nomme: new FormControl(),
  comm: new FormControl()
});;
  constructor(private patientservice:PatientService,private portfolioservice:PortfolioService,private route:Router) { }

  ngOnInit(): void {
    
  }

createportf(){
  console.log('done');
  let portf=new Portfolio(this.loginForm2.value);
this.portfolioservice.createportfolio(portf).then(
  (res:any) =>{
    alert('Portfolio ajouter');
console.log(res);
this.route.navigate(['/listes']); 
   })

  .catch( (error:any) =>{
  console.log(error)
  }

)

}

}

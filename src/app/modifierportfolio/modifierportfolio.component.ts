import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { Portfolio } from '../portfolio';
import {PortfolioService} from '../portfolio.service';
@Component({
  selector: 'app-modifierportfolio',
  templateUrl: './modifierportfolio.component.html',
  styleUrls: ['./modifierportfolio.component.css']
})
export class ModifierportfolioComponent implements OnInit {
loginform6:FormGroup = new FormGroup({
  nom: new FormControl(),
  prenom: new FormControl(),
  email: new FormControl(),
  numtel: new FormControl(),
  service: new FormControl(),
  
  nomme: new FormControl(),
  
  comm: new FormControl()
});
idport!:string;
portfl!: Portfolio;
nom !: string; prenom!: string;email!: string;numtel!: string;service!: string;datee!: string;dates!: string;
prov!: string;nums!: string;nomme!: string;desti!: string;comm!: string;
alert=false;

constructor(
  private router: Router, 
  private portfolioservice: PortfolioService, 
  private root: ActivatedRoute) {
    this.root.params.subscribe(res => {
      console.log('params', res);
      this.idport = res['idport'];
      const portfolioData = {
        nom: res['nom'],
        prenom: res['prenom'],
        email: res['email'],
        numtel: res['numtel'],
        service: res['service'],
        
        nomme: res['nomme'],
        
        comm: res['comm']
      };
      this.portfl = new Portfolio(portfolioData);
      console.log('one portfolio', this.portfl);
   });
}
  ngOnInit(): void {
    if (this.portfl) {
      this.loginform6.patchValue({
       nom:this.portfl.nom,
       prenom:this.portfl.prenom,
       email:this.portfl.email,
       numtel:this.portfl.numtel,
       service:this.portfl. service,
     
       nomme:this.portfl.nomme,
       
       comm:this.portfl.comm,

      });
    }
   
  }
  afficher(){
    this.alert=true;
  }
updateport(){
  console.log(this.loginform6.value)
  this.nom=this.loginform6.get('nom')?.value ?? '';
  this.prenom= this.loginform6.get('prenom')?.value ?? '';
  this.email=this.loginform6.get('email')?.value ?? '';
  this.numtel=this.loginform6.get('numtel')?.value ?? '';
  this.service=this.loginform6.get('service')?.value ?? '';
  
  this.nomme=this.loginform6.get('nomme')?.value ?? '';
 
  this.comm=this.loginform6.get('comm')?.value ?? '';
   this.portfolioservice.updateportfolio(this.idport,this.nom,this.prenom,this.email,this.numtel,this.service,this.nomme,this.comm).then(
     res =>{
     alert('portfolio modifier');
 console.log(res);
   this.router.navigate(['/listes']); 
      })
 
     .catch( error =>{
       console.log(error);
     }
  
   )
}
}

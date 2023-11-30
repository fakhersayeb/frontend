import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import {RendezvousService} from '../rendezvous.service';
import { Rendezvous } from '../rendezvous';
@Component({
  selector: 'app-modifierrendezvous',
  templateUrl: './modifierrendezvous.component.html',
  styleUrls: ['./modifierrendezvous.component.css']
})
export class ModifierrendezvousComponent implements OnInit {
loginform8:FormGroup = new FormGroup({
  
  numrend: new FormControl(),
  nom: new FormControl(),
  prenom: new FormControl(),
  email: new FormControl(),
  numtel: new FormControl(),
  daterend: new FormControl(),
  tempsrend: new FormControl(),
});
  idrend!: string;
  rend!: Rendezvous;
numrend!:string; nom!:string; prenom!:string; email!:string; numtel!:string; daterend!:string; tempsrend!:string;
alert=false;
constructor(private rendezvouservice:RendezvousService, private router:Router,private root:ActivatedRoute) { 
    this.root.params.subscribe(res=>{
      console.log('params', res);
      this.idrend = res['idrend'];
      const rendezvousData = {
        numrend: res['numrend'],
        nom: res['nom'],
        prenom: res['prenom'],
        email: res['email'],
        numtel: res['numtel'],
        daterend: res['daterend'],
        tempsrend: res['tempsrend']
      };
      this.rend=new Rendezvous(rendezvousData)
      console.log('one rendez-vous',this.rend)
    });
  }
  ngOnInit(): void {
    if (this.rend) {
      this.loginform8.patchValue({
      numrend:this.rend.numrend,
      nom:this.rend.nom,
      prenom:this.rend.prenom,
      email:this.rend.email,
      numtel:this.rend.numtel,
      daterend:this.rend.daterend,
      tempsrend:this.rend.tempsrend
   
  });
}

}
afficher(){
this.alert=true;
}
  updaterend(){
  console.log(this.loginform8.value)
  this.numrend=this.loginform8.get('numrend')?.value ?? '';
  this.nom=this.loginform8.get('nom')?.value ?? '';
  this.prenom= this.loginform8.get('prenom')?.value ?? '';
  this.email=this.loginform8.get('email')?.value ?? '';
  this.numtel=this.loginform8.get('numtel')?.value ?? '';
  this.daterend=this.loginform8.get('daterend')?.value ?? '';
  this.tempsrend=this.loginform8.get('tempsrend')?.value ?? '';
  this.rendezvouservice.updaterendezvous(this.idrend,this.numrend,this.nom,this.prenom,this.email,this.numtel,this.daterend,this.tempsrend).then(
    res =>{
    alert('rendez-vous modifier');
console.log(res);
  this.router.navigate(['/listes']); 
     })

    .catch( error =>{
      console.log(error);
    }
 
  )
}
}

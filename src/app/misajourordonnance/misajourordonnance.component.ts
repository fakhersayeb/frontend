import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Ordonnance } from '../ordonnance';
import {OrdonnanceService} from '../ordonnance.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-misajourordonnance',
  templateUrl: './misajourordonnance.component.html',
  styleUrls: ['./misajourordonnance.component.css']
})
export class MisajourordonnanceComponent implements OnInit {

loginform7:FormGroup = new FormGroup({
  numord: new FormControl(),
  prepa: new FormControl(),
  telpat: new FormControl(),
  texte: new FormControl(),
})

idord!:string;
ordonn!:Ordonnance;
numord!:string; prepa!:string;telpat!:string; texte!:string;
alert=false;

  constructor(private router:Router,private ordonnanceservice:OrdonnanceService,private root:ActivatedRoute) {
    this.root.params.subscribe(res=>{
      console.log('params', res);
      this.idord = res['idord'];
      const ordonnanceData = {
        numord: res['numord'],
        prepa: res['prepa'],
        telpat: res['telpat'],
        texte: res['texte']
      };
      this.ordonn = new Ordonnance(ordonnanceData);
      console.log('one portfolio', this.ordonn);
    })
   }

  ngOnInit(): void {
    if (this.ordonn) {
      this.loginform7.patchValue({
        numord:this.ordonn.numord,
        prepa:this.ordonn.prepa,
        telpat:this.ordonn.telpat,
        texte:this.ordonn.texte,
    
  });
}
}
afficher(){
this.alert=true;
}
updateord()
{
  console.log(this.loginform7.value)
  this.numord=this.loginform7.get('numord')?.value ?? '';
  this.prepa= this.loginform7.get('prepa')?.value ?? '';
  this.telpat=this.loginform7.get('telpat')?.value ?? '';
  this.texte=this.loginform7.get('texte')?.value ?? '';
   this.ordonnanceservice.updateordonnance(this.idord,this.numord,this.prepa,this.telpat,this.texte).then(
     res =>{
     alert('ordonnance modifier');
 console.log(res);
   this.router.navigate(['/listes']); 
      })
 
     .catch( error =>{
       console.log(error);
     }
  
   )
}
}

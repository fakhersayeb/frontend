import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {RendezvousService} from '../rendezvous.service';
import {Rendezvous} from '../rendezvous';
@Component({
  selector: 'app-ajoutrendezvous',
  templateUrl: './ajoutrendezvous.component.html',
  styleUrls: ['./ajoutrendezvous.component.css']
})
export class AjoutrendezvousComponent implements OnInit {
loginform5:FormGroup =new FormGroup({
  numrend:new FormControl(),
  nom:new FormControl(),
  prenom:new FormControl(),
  email:new FormControl(),
  numtel:new FormControl(),
  daterend:new FormControl(),
  tempsrend:new FormControl()
      });
  constructor(private route:Router,private rendezvousservice:RendezvousService) { }

  ngOnInit(): void {
    
  }
  createrend(){
    console.log('done');
    let rend=new Rendezvous(this.loginform5.value);
  this.rendezvousservice.createrendezvous(rend).then(
    res =>{
      alert('Rendez-vous ajouter');
  console.log(res);
  this.route.navigate(['/listes']); 
     })
  
    .catch( error =>{
      console.log(error);
    }
  
  )
  

  }
}

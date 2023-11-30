import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Ordonnance } from '../ordonnance';
import {OrdonnanceService} from '../ordonnance.service';
@Component({
  selector: 'app-ajoutordonnance',
  templateUrl: './ajoutordonnance.component.html',
  styleUrls: ['./ajoutordonnance.component.css']
})
export class AjoutordonnanceComponent implements OnInit {
  loginform3:FormGroup=new FormGroup({
    numord:new FormControl(),
    prepa:new FormControl(),
    telpat:new FormControl(),
    texte:new FormControl()
        });
  constructor(private route:Router,private ordonnanceservice:OrdonnanceService) { }

  ngOnInit(): void {
  }
  createord(){
    console.log('done');
    let ord=new Ordonnance(this.loginform3.value);
  this.ordonnanceservice.createordonnance(ord).then(
    res =>{
      alert('Ordonnance ajouter');
  console.log(res);
  this.route.navigate(['/listes']); 
     })
  
    .catch( error =>{
      console.log(error);
    }
  
  )
  
  }
}

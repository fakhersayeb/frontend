import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  alert=false;
  loginForm0: FormGroup = new FormGroup({
    Nom: new FormControl(), 
    Email: new FormControl(),
    Motdepasse: new FormControl()
  });
  user:any
  constructor(private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
  }
 
  registeruser(){
    
    this. user=this.loginForm0.value;
    this.authservice.registeruser(this.user).subscribe(
      
      res =>{
        
        console.log(res)
       
       
        this.router.navigate(['/authent']);
      } ,
      err => {
        
        console.log(err)
        
      }
    )
  }
}

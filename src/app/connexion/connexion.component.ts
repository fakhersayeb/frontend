import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginform: FormGroup = new FormGroup({
    Email: new FormControl(),
    Motdepasse: new FormControl()
  });
  user:any;
  vi=true
  va=true
  constructor(private router:Router, private authservice:AuthService) { }
  ngOnInit(): void { 
    
  }
  visible1(){
     
    this.vi=false 
     
 }
 visible2(){
   this.va=false
 }
  loginuser(){
    this. user=this.loginform.value;
    this.authservice.loginuser(this.user).subscribe(
      
      res =>{
        console.log(res)
        localStorage.setItem('token', res.token)
       // alert('vous êtes connecté sur cette application ')
       
       this.router.navigate(['/home'])
      } ,
     
      err =>{
         
        console.log(err)
        if(err.status==401) this.visible1()
        //alert('mot de passe incorrect')
        if(err.status==402) this.visible2()
        //alert('email incorrect')
     
      } 
      
    )
  }

}

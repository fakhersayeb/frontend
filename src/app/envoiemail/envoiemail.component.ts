import { Component, OnInit } from '@angular/core';
import {EnvoiemailService} from '../envoiemail.service';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-envoiemail',
  templateUrl: './envoiemail.component.html',
  styleUrls: ['./envoiemail.component.css']
})
export class EnvoiemailComponent implements OnInit {
  constructor(private http:HttpClient,private envoiemailservice:EnvoiemailService) { }
contactForm:NgForm= new NgForm([], []);
private url='http://localhost:3000';
  ngOnInit(): void {
  }
  onSubmit(contactForm:NgForm) {
    console.log('ngform',contactForm.form.value)
    let f=contactForm.form.value
    let data = {
      to:f.email,
      msg:f.message
    }
    console.log(data);

    
      if (contactForm.valid) {

        this.envoiemailservice.sendmail(data).then(res=>{
          alert('email envoyer');
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })
      
      }
    }
  }


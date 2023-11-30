import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import {Patient} from '../patient';
import {PortfolioService} from '../portfolio.service';
import {Portfolio} from '../portfolio';
import {OrdonnanceService} from '../ordonnance.service';
import {Ordonnance} from '../ordonnance';
import {RendezvousService} from '../rendezvous.service';
import {Rendezvous} from '../rendezvous';
import {Router,ActivatedRoute} from '@angular/router';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  [x: string]: any;
  
  public patients: Patient[] = [];
  public portfolios: Portfolio[] = [];
  public ordonnances: Ordonnance[] = [];
  public rendezvouss: Rendezvous[] = [];
  constructor(private rendezvousservice:RendezvousService,private ordonnanceservice:OrdonnanceService,private _Patientservice:PatientService,private portfolioservice:PortfolioService,private routeur:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.readpatients();
    this.readportfolio();
    this.readordonnance();
    this.readrendezvouss();
  }
  readpatients(){
    this._Patientservice.readpatients().subscribe(
 (data:any)=>{
   console.log(data);
   this.patients=data.msg;
 },
 error =>{
   console.log(error);
 }
    )
  }
  
 
  update(p: { nom: string; prenom: string; email: string; numtel: string; },id: string){
  this.routeur.navigate(['/modifier/'+id,{
     nom:p.nom,
     prenom:p.prenom,
     email:p.email,
     numtel:p.numtel,
    
   }]);
    
  }
  generatePDF(ord: { numord: string; prepa: string; telpat: string; texte: string; }) {
    const doc = new jsPDF();
  
    
  
    
      doc.text(`Numero d'ordonnance: ${ord.numord}`, 20, 20);
     
      doc.text(`Prénom de patient: ${ord.prepa}`, 20, 30);
    
      doc.text(`Numéro de téléphone: ${ord.telpat}`, 20, 40);
    
      doc.text(`Texte: `, 20 ,50);
    
      doc.text(`${ord.texte}`, 20, 58);
     
    
  
    doc.save('Ordonnance.pdf');
  }
  delete(patient: Patient){
 this._Patientservice.deletepatient(patient._id).subscribe(
   data =>{
     this.patients.splice(this.patients.indexOf(patient),1);
     alert('patient supprimer');
   },
 error =>{
   
 }
 )
  }
  readportfolio(){
    this.portfolioservice.readportfolios().subscribe(
  (res:any) =>{
   console.log('portfolio',res);
   this.portfolios=res.msg;
  },
  error =>{
   console.log(error);
  }
    )
  }
   updateportf(portf: { nom: string; prenom: string; email: string; numtel: string; service: string;  nomme: string;  comm: string; },id: string){
     this.routeur.navigate(['/misajourportfolio/'+id,{ nom:portf.nom,
      prenom:portf.prenom,
      email:portf.email,
      numtel:portf.numtel,
    service:portf.service,
 
  nomme:portf.nomme,
  
  comm:portf.comm,
  }]);
   }
   deleteportf(portfolio: Portfolio){
    this.portfolioservice.deleteportfolio(portfolio._id).subscribe(
      data =>{
        this.portfolios.splice(this.portfolios.indexOf(portfolio),1);
        alert('portfolio supprimer');
      },
    error =>{
      
    }
    )
     }
     readordonnance(){
      this.ordonnanceservice.readordonnances().subscribe(
        (res:any) =>{
         console.log(res);
         this.ordonnances=res.msg;
        },
        error =>{
         console.log(error);
        }
          )
        }
        updateord(ord: { numord: string; prepa: string; telpat: string; texte: string; },id: string){
          this.routeur.navigate(['/misajourordonnance/'+id,{numord:ord.numord,
          prepa:ord.prepa,telpat:ord.telpat,texte:ord.texte}]); 
         }
     deleteord(ordonnance: Ordonnance){
      this.ordonnanceservice.deleteordonnance(ordonnance._id).subscribe(
        data =>{
          this.ordonnances.splice(this.ordonnances.indexOf(ordonnance),1);
          alert('ordonnance supprimer');
        },
      error =>{
        
      }
      )
     }
     readrendezvouss(){
      this.rendezvousservice.readrendezvous().subscribe(
        (res:any) =>{
          console.log(res)
          this.rendezvouss=res.msg;
        },
        error =>{
  console.log(error);
        }
        
      )
    }
    deleterend(rendezvous: Rendezvous){
      this.rendezvousservice.deleterendezvous(rendezvous._id).subscribe(
        data =>{
          this.rendezvouss.splice(this.rendezvouss.indexOf(rendezvous),1);
          alert('rendez-vous supprimer');
        },
      error =>{
        
      }
      )
     }
     updaterend(rend: { numrend: string; nom: string; prenom: string; email: string; numtel: string; daterend: string; tempsrend: string; },id: string){
      this.routeur.navigate(['/misajourrendezvous/'+id,{numrend:rend.numrend,
      nom:rend.nom,prenom:rend.prenom,email:rend.email,numtel:rend.numtel,daterend:rend.daterend,tempsrend:rend.tempsrend}]); 
     }
     searchnom(){
      this.patients = this.patients.filter(res => {
        if (res.nom && this.nom) { 
          return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
        }
        return false; 
      });
    }
}

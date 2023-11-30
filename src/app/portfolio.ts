export class Portfolio {
    [x: string]: string;
    nom:string;
    prenom:string;
    email:string;
    numtel:string;
    service:string;
   
    nomme:string;
    
    comm:string;
    constructor(portf: { nom: string; prenom: string; email: string; numtel: string; service: string;  nomme: string; comm: string; }){
        this.nom=portf.nom;
        this.prenom=portf.prenom;
this.email=portf.email;
this.numtel=portf.numtel;
this.service=portf.service;

this.nomme=portf.nomme;

this.comm=portf.comm;
    }
}

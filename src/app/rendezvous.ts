export class Rendezvous {
    [x: string]: string;
    numrend:string;
    nom:string;
    prenom:string;
    email:string;
    numtel:string;
    daterend:string;
    tempsrend:string;
    constructor(rend: { numrend: string; nom: string; prenom: string; email: string; numtel: string; daterend: string; tempsrend: string; }){
this.numrend=rend.numrend;
this.nom=rend.nom;
this.prenom=rend.prenom;
this.email=rend.email;
this.numtel=rend.numtel;
this.daterend=rend.daterend;
this.tempsrend=rend.tempsrend;
    }
}

export class Patient {
    _id!: string;
    nom:string;
    prenom:string;
    email:string;
    numtel:string;
  

    constructor(p: { [x: string]: any; nom?: any; prenom?: any; email?: any; numtel?: any; }){
        this.nom=p.nom;
        this.prenom=p.prenom;
this.email=p.email;
this.numtel=p.numtel;
    }
}


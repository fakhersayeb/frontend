export class Auth {
   
    Email:string;
    Motdepasse:string;
    constructor(user: { Email: string; Motdepasse: string; }){
//this.Email=user.Email;
this.Email=user.Email;
this.Motdepasse=user.Motdepasse;
    }
}
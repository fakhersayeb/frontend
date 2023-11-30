import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Portfolio } from './portfolio';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  
  private baseuri='http://localhost:3000';

private hedears=new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  createportfolio(portfolio:Portfolio){
   console.log('portfolio=',portfolio);
return this.http.post(this.baseuri+'/create/portfolio',portfolio).toPromise();
  }
  readportfolios():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.baseuri+'/read/portfolio',{headers:this.hedears});
      }
      updateportfolio(id: string,nom: string,prenom: string,email: string,numtel: string,service: string,nomme: string,comm: string){
        return this.http.put(this.baseuri+'/update/portfolio/'+id,{nom:nom,prenom:prenom,email:email,numtel:numtel,service:service,nomme:nomme,comm:comm}).toPromise();
          }
          deleteportfolio(id:string){
            return this.http.delete(this.baseuri+'/delete/portfolio/'+id,{headers:this.hedears});
          }            
}

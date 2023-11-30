import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Rendezvous} from './rendezvous';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  private baseuri='http://localhost:3000';

  private hedears=new HttpHeaders().set('content-type','application/json');
    constructor(private http:HttpClient) { }
  
    createrendezvous(rendezvous:Rendezvous){
      console.log('rendezvous =',rendezvous);
  return this.http.post(this.baseuri+'/create/rendezvous',rendezvous).toPromise();
    }
    readrendezvous():Observable<Rendezvous[]>{
      return this.http.get<Rendezvous[]>(this.baseuri+'/read/rendezvous',{headers:this.hedears});
        }
        updaterendezvous(id: string,numrend: string,nom: string,prenom: string,email: string,numtel: string,daterend: string,tempsrend: string){
          return this.http.put(this.baseuri+'/update/rendezvous/'+id,{numrend:numrend,nom:nom,prenom:prenom,email:email,numtel:numtel,daterend:daterend,tempsrend:tempsrend}).toPromise();
            }
            deleterendezvous(id:string){
              return this.http.delete(this.baseuri+'/delete/rendezvous/'+id,{headers:this.hedears});
                }
}

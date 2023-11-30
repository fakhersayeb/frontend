import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseuri='http://localhost:3000';

private hedears=new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  createpatient(patient:Patient){
    console.log('patient =',patient);
return this.http.post(this.baseuri+'/create',patient).toPromise();
  }
  readpatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseuri+'/read',{headers:this.hedears});
      }
      updatepatient(id: string,nom: string, prenom: string, email: string, numtel: string,){
        console.log('nom:',nom)
        return this.http.put(this.baseuri+'/update/'+id, 
        {nom:nom,prenom:prenom,email:email,numtel:numtel}).toPromise();
          }
          deletepatient(id:string){
            return this.http.delete(this.baseuri+'/delete/'+id,{headers:this.hedears});
              }
}

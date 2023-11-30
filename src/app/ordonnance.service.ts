import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ordonnance} from './ordonnance';
import { Observable } from 'rxjs';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private baseuri='http://localhost:3000';

  private hedears=new HttpHeaders().set('content-type','application/json');
    constructor(private http:HttpClient) { }
  
    createordonnance(ordonnance:Ordonnance){
      console.log('ordonnance =',ordonnance);
  return this.http.post(this.baseuri+'/create/ordonnance',ordonnance).toPromise();
    }
    readordonnances():Observable<Ordonnance[]>{
      return this.http.get<Ordonnance[]>(this.baseuri+'/read/ordonnance',{headers:this.hedears});
        }
        updateordonnance(id: string,numord: string,prepa: string,telpat: string,texte: string){
          return this.http.put(this.baseuri+'/update/ordonnance/'+id,{numord:numord,prepa:prepa,telpat:telpat,texte:texte}).toPromise();
            }
            deleteordonnance(id:string){
              return this.http.delete(this.baseuri+'/delete/ordonnance/'+id,{headers:this.hedears});
                }
             
}

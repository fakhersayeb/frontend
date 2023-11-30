import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvoiemailService {
  private baseuri='http://localhost:3000';

  constructor(private http:HttpClient) { }
  sendmail(sendmail:any)
  {
    return this.http.post(this.baseuri+'/sendmail',sendmail).toPromise();
  }
             
}

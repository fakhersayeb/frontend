import { Injectable } from '@angular/core';
import {Auth} from './auth';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uriinscri="http://localhost:3000/inscri";
  private uriauth="http://localhost:3000/auth";
    constructor(private router:Router,private http:HttpClient) { }
    registeruser(auth:Auth){
      return this.http.post<any>(this.uriinscri,auth)
    }
    loginuser(auth:Auth){
      return this.http.post<any>(this.uriauth,auth)
    }
    loggedIn(){
      return !!localStorage.getItem('token')
    }
    logoutUser(){
      localStorage.removeItem('token')
      this.router.navigate(['/authent'])
    }
    gettoken(){
      return localStorage.getItem('token')
    }
    }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../model/user';
import Variables from '../config/variables';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl : string = Variables.apiUrl;

  constructor(private http: HttpClient) { }

  createSession(user: User): Observable<any>{
    return this.http.post(`${this.apiUrl}/sessions`, user);
  } 

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/Users`, user);
  } 
}

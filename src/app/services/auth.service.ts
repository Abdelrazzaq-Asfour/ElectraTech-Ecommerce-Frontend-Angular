

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

// src/app/services/auth.service.ts

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:5000/api/Auth'; 

  constructor(private http: HttpClient) {}

  loginUser(loginData: { email: string; password: string }): Observable<User> {
    
    return this.http.post<User>(`${this.apiUrl}/login`, loginData);
  }

  register(user: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }


  // auth.service.ts

// auth.service.ts
updateUser(id: number, user: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/${id}`, user);
}


}

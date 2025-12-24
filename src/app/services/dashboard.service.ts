// dashboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = 'http://localhost:5000/api/Dashboard'; 

  constructor(private http: HttpClient) {}

  getSummary() {
    return this.http.get(`${this.apiUrl}/summary`);
  }

  getUserAnalysis() {
    return this.http.get(`${this.apiUrl}/user-analysis`);
  }
}
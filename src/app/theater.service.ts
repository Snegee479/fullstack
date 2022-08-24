import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private baseUrl = 'http://localhost:8080/getAllTheater';
  private insertUrl='http://localhost:8080/insertTheater';
  private updateURL='http://localhost:8080/updateTheater';
  private findbyidUrl='http://localhost:8080/findByTheaterId';
  private deleteURL='http://localhost:8080/deleteTheater';
  constructor(private http: HttpClient) { }

  findByTheaterId(id: number): Observable<any> {
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }

  createTheater(theater: Object): Observable<Object> {
    return this.http.post(`${this.insertUrl}`, theater);
  }

  updateTheater(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateURL}/${id}`, value);
  }

  deleteTheater(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getTheater(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

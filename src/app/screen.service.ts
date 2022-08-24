import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private baseUrl = 'http://localhost:8080/getAllScreen';
  private insertUrl='http://localhost:8080/insertScreen';
  private upadteURL='http://localhost:8080/updateScreen';
  private findbyidUrl='http://localhost:8080/findByScreenId';
  private deleteURL='http://localhost:8080/deleteScreen';
  constructor(private http: HttpClient) { }

  findByScreenId(id: number): Observable<any> {
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }

  createScreen(screen: Object): Observable<Object> {
    return this.http.post(`${this.insertUrl}`, screen);
  }

  updateScreen(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.upadteURL}/${id}`, value);
  }

  deleteScreen(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getScreen(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotService {
  private baseUrl = 'http://localhost:8080/getAllTimeSlot';
  private insertUrl='http://localhost:8080/insertTimeSlot';
  private upadteURL='http://localhost:8080/updateTimeSlot';
  private findbyidUrl="http://localhost:8080/findByTimeId";
  private deleteURL='http://localhost:8080/deleteTimeSlot';
  constructor(private http: HttpClient) { }

  findByTimeId(id: number): Observable<any> {
    alert(this.findbyidUrl+id);
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }

  createTimeSlot(timeSlot: Object): Observable<Object> {
    return this.http.post(`${this.insertUrl}`, timeSlot);
  }

  updateTimeSlot(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.upadteURL}/${id}`, value);
  }

  deleteTimeSlot(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getTimeSlot(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

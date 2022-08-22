import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'http://localhost:8080/getAllMovies';
  private insertUrl='http://localhost:8080/insertMovies';
  private upadteURL='http://localhost:8080/updateMovie';
  private findbyidUrl='http://localhost:8080/findByMovieId';
  private deleteURL='http://localhost:8080/deleteMovie';
  constructor(private http: HttpClient) { }

  findByMovieId(id: number): Observable<any> {
    return this.http.get(`${this.findbyidUrl}/${id}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.insertUrl}`, movie);
  }

  updateMovie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.upadteURL}/${id}`, value);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.deleteURL}/${id}`, { responseType: 'text' });
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

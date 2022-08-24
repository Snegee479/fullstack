import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie!: Observable<Movies[]>;

  constructor(private moviesService: MoviesService,
    private router: Router,private httpClient: HttpClient) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movie = this.moviesService.getMovies();
    console.log(this.movie);

    //this.movie = this.moviesService.getMovies();
    // this.httpClient.get('http://localhost:8080/getAllMovies').subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    
  }

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

  findByMovieId(id: number){
    this.router.navigate(['findByMovieId', id]);
  }

  updateMovie(id: number){
    this.router.navigate(['updateMovie', id]);
  }
}
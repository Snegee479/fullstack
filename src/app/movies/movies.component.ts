import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie!: Observable<Movies[]>;

  constructor(private moviesService: MoviesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movie = this.moviesService.getMovies();
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
    this.router.navigate(['details', id]);
  }

  updateMovie(id: number){
    this.router.navigate(['update', id]);
  }
}
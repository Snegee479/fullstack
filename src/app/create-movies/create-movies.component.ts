import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {

  movie: Movies = new Movies();
  submitted = false;

  constructor(private moviesService: MoviesService,
    private router: Router) { }

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movies();
  }

  save() {
    this.moviesService
    .createMovie(this.movie).subscribe(data => {
      console.log(data)
      this.movie = new Movies();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getAllMovies']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.css']
})
export class UpdateMoviesComponent implements OnInit {
  id!: number;
  movie: Movies = new Movies();

  constructor(private route: ActivatedRoute,private router: Router,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = new Movies();

    this.id = this.route.snapshot.params['id'];
    
    this.moviesService.findByMovieId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.movie = data;
      }, (error: any) => console.log(error));
  }

  updateMovie() {
    this.moviesService.updateMovie(this.id, this.movie)
      .subscribe((data: any) => {
        console.log(data);
        this.movie = new Movies();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateMovie();    
  }

  gotoList() {
    this.router.navigate(['/getAllMovies']);
  }
}
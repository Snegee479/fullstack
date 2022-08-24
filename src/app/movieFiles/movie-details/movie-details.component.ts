import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id!: number;
  movie!: Movies;

  constructor(private route: ActivatedRoute,private router: Router,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.movie = new Movies();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.moviesService.findByMovieId(this.id)
      .subscribe((data: Movies) => {
        console.log(data)
        this.movie = data;
      }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['getAllMovies']);
  }

}

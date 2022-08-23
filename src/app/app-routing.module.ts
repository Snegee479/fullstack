import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'getAllMovies', component: MoviesComponent },
  { path: 'insertMovies', component: CreateMoviesComponent },
  { path: 'updateMovie/:id', component: UpdateMoviesComponent },
  { path: 'findByMovieId/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

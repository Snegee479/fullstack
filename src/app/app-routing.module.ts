import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'getAllMovies', component: MoviesComponent },
  { path: 'insertMovies', component: MoviesComponent },
  { path: 'updateMovie/:id', component: MoviesComponent },
  { path: 'findByMovieId/:id', component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

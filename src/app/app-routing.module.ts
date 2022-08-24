import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMoviesComponent } from './movieFiles/create-movies/create-movies.component';
import { CreateTheaterComponent } from './theaterFiles/create-theater/create-theater.component';
import { MovieDetailsComponent } from './movieFiles/movie-details/movie-details.component';
import { MoviesComponent } from './movieFiles/movies/movies.component';
import { TheaterDetailsComponent } from './theaterFiles/theater-details/theater-details.component';
import { TheaterComponent } from './theaterFiles/theater/theater.component';
import { UpdateMoviesComponent } from './movieFiles/update-movies/update-movies.component';
import { UpdateTheaterComponent } from './theaterFiles/update-theater/update-theater.component';
import { CreateScreenComponent } from './screenFiles/create-screen/create-screen.component';
import { ScreenDetailsComponent } from './screenFiles/screen-details/screen-details.component';
import { ScreenComponent } from './screenFiles/screen/screen.component';
import { UpdateScreenComponent } from './screenFiles/update-screen/update-screen.component';
import { TimeSlotComponent } from './timeSlotFiles/time-slot/time-slot.component';
import { CreateTimeSlotComponent } from './timeSlotFiles/create-time-slot/create-time-slot.component';
import { TimeSlotDetailsComponent } from './timeSlotFiles/time-slot-details/time-slot-details.component';
import { UpdatetimeSlotComponent } from './timeSlotFiles/updatetime-slot/updatetime-slot.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'getAllMovies', component: MoviesComponent },
  { path: 'insertMovies', component: CreateMoviesComponent },
  { path: 'updateMovie/:id', component: UpdateMoviesComponent },
  { path: 'findByMovieId/:id', component: MovieDetailsComponent },

  { path: 'getAllTheater', component: TheaterComponent },
  { path: 'insertTheater', component: CreateTheaterComponent },
  { path: 'updateTheater/:id', component: UpdateTheaterComponent },
  { path: 'findByTheaterId/:id', component:  TheaterDetailsComponent},

  { path: 'getAllTimeSlot', component: TimeSlotComponent },
  { path: 'insertTimeSlot', component: CreateTimeSlotComponent },
  { path: 'updateTimeSlot/:id', component: UpdatetimeSlotComponent },
  { path: 'findByTimeId/:id', component:  TimeSlotDetailsComponent},

  { path: 'getAllScreen', component: ScreenComponent },
  { path: 'insertScreen', component: CreateScreenComponent },
  { path: 'updateScreen/:id', component: UpdateScreenComponent },
  { path: 'findByScreenId/:id', component:  ScreenDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

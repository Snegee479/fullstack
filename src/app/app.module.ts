import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterComponent } from './theaterFiles/theater/theater.component';
import { UpdateTheaterComponent } from './theaterFiles/update-theater/update-theater.component';
import { TheaterDetailsComponent } from './theaterFiles/theater-details/theater-details.component';
import { CreateTheaterComponent } from './theaterFiles/create-theater/create-theater.component';
import { MoviesComponent } from './movieFiles/movies/movies.component';
import { CreateMoviesComponent } from './movieFiles/create-movies/create-movies.component';
import { UpdateMoviesComponent } from './movieFiles/update-movies/update-movies.component';
import { MovieDetailsComponent } from './movieFiles/movie-details/movie-details.component';
import { ScreenComponent } from './screenFiles/screen/screen.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateScreenComponent } from './screenFiles/update-screen/update-screen.component';
import { ScreenDetailsComponent } from './screenFiles/screen-details/screen-details.component';
import { CreateScreenComponent } from './screenFiles/create-screen/create-screen.component';
import { TimeSlotComponent } from './timeSlotFiles/time-slot/time-slot.component';
import { UpdatetimeSlotComponent } from './timeSlotFiles/updatetime-slot/updatetime-slot.component';
import { CreateTimeSlotComponent } from './timeSlotFiles/create-time-slot/create-time-slot.component';
import { TimeSlotDetailsComponent } from './timeSlotFiles/time-slot-details/time-slot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TheaterComponent,
    UpdateTheaterComponent,
    TheaterDetailsComponent,
    CreateTheaterComponent,
    MoviesComponent,
    CreateMoviesComponent,
    UpdateMoviesComponent,
    MovieDetailsComponent,
    ScreenComponent,
    UpdateScreenComponent,
    ScreenDetailsComponent,
    CreateScreenComponent,
    TimeSlotComponent,
    UpdatetimeSlotComponent,
    CreateTimeSlotComponent,
    TimeSlotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

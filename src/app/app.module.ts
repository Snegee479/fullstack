import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheatreComponent } from './theatre/theatre.component';
import { UpdateTheatreComponent } from './update-theatre/update-theatre.component';
import { TheatreDetailsComponent } from './theatre-details/theatre-details.component';
import { CreateTheatreComponent } from './create-theatre/create-theatre.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ScreenComponent } from './screen/screen.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TheatreComponent,
    UpdateTheatreComponent,
    TheatreDetailsComponent,
    CreateTheatreComponent,
    MoviesComponent,
    CreateMoviesComponent,
    UpdateMoviesComponent,
    MovieDetailsComponent,
    ScreenComponent
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

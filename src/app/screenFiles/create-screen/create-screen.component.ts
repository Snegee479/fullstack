import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/movieFiles/movies';
import { MoviesService } from 'src/app/movies.service';
import { ScreenService } from 'src/app/screen.service';
import { Screen } from '../screen';
@Component({
  selector: 'app-create-screen',
  templateUrl: './create-screen.component.html',
  styleUrls: ['./create-screen.component.css']
})
export class CreateScreenComponent implements OnInit {

  screen: Screen=new Screen();  
  submitted = false;

  constructor(private screenService: ScreenService,
    private router: Router) { }

  ngOnInit() {
  }

  newScreen(): void {
    this.submitted = false;
    this.screen = new Screen();
  }
 
  save() {
    // let movie:any=new Movies();
    // movie=this.moviesService.findByMovieId(this.screen.movie.movieId);

    
    console.log(this.screen);
    this.screenService
    .createScreen(this.screen).subscribe((data: any) => {
      console.log(data)
      this.screen = new Screen();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }
/**"movieId": 1,
        "movieName": "COMALI",
        "activeStatus": false,
        "ticketPrice": 150.0,
        "language": "Telugu",
        "movieDescription": "Actor is Jayam Ravi",
        "category": "Love drama" */

  onSubmit() {
    this.submitted = true;
    console.log(this.screen+"onSubmit");
    this.save();    
  }


  gotoList() {
    this.router.navigate(['/getAllScreen']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater } from '../theater';
import { TheaterService } from '../../theater.service';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {
  theater: Theater = new Theater();
  submitted = false;

  constructor(private theaterService: TheaterService,
    private router: Router) { }

  ngOnInit() {
  }

  newTheater(): void {
    this.submitted = false;
    this.theater = new Theater();
  }

  save() {
    this.theaterService
    .createTheater(this.theater).subscribe((data: any) => {
      console.log(data)
      this.theater = new Theater();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getAllTheater']);
  }

}

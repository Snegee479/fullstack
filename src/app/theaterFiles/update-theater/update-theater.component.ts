import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from '../theater';
import { TheaterService } from '../../theater.service';

@Component({
  selector: 'app-update-theater',
  templateUrl: './update-theater.component.html',
  styleUrls: ['./update-theater.component.css']
})
export class UpdateTheaterComponent implements OnInit {
  id!: number;
  theater: Theater = new Theater();

  constructor(private route: ActivatedRoute,private router: Router,
    private theaterService: TheaterService) { }

  ngOnInit() {
    this.theater = new Theater();

    this.id = this.route.snapshot.params['id'];
    
    this.theaterService.findByTheaterId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.theater = data;
      }, (error: any) => console.log(error));
  }

  updateTheater() {
    this.theaterService.updateTheater(this.id, this.theater

      )
      .subscribe((data: any) => {
        console.log(data);
        this.theater = new Theater();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateTheater();    
  }

  gotoList() {
    this.router.navigate(['/getAllTheater']);
  }
}
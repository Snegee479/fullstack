import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from '../theater';
import { TheaterService } from '../../theater.service';
 
@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.css']
})
export class TheaterDetailsComponent implements OnInit {
  id!: number;
  theater!: Theater;

  constructor(private route: ActivatedRoute,private router: Router,
    private theaterService: TheaterService) { }

  ngOnInit() {
    this.theater = new Theater();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.theaterService.findByTheaterId(this.id)
      .subscribe((data: Theater) => {
        console.log(data)
        this.theater = data;
      }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['getAllTheater']);
  }

}

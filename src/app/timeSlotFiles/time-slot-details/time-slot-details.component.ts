import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSlot } from 'src/app/time-slot';
import { TimeSlotService } from 'src/app/time-slot.service';

@Component({
  selector: 'app-time-slot-details',
  templateUrl: './time-slot-details.component.html',
  styleUrls: ['./time-slot-details.component.css']
})
export class TimeSlotDetailsComponent implements OnInit {

  id: number;
  timeSlot: TimeSlot;

  constructor(private route: ActivatedRoute,private router: Router,
    private timeSlotService: TimeSlotService) { }

  ngOnInit() {
    this.timeSlot = new TimeSlot();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.timeSlotService.findByTimeId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.timeSlot = data;
      }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['getAllTimeSlot']);
  }

}

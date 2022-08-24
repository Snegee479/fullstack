import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimeSlot } from '../../time-slot';
import { TimeSlotService } from '../../time-slot.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {
  timeSlot: Observable<TimeSlot[]>;
  constructor(private timeSlotService: TimeSlotService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.timeSlot = this.timeSlotService.getTimeSlot();
  }

  deleteTimeSlot(id: number) {
    this.timeSlotService.deleteTimeSlot(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

  findByTimeId(id: number){
    this.router.navigate(['findByTimeId', id]);
  }

  updateTimeSlot(id: number){
    this.router.navigate(['updateTimeSlot', id]);
  }
}
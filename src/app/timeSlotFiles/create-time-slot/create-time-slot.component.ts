import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeSlot } from '../../time-slot';
import { TimeSlotService } from '../../time-slot.service';

@Component({
  selector: 'app-create-time-slot',
  templateUrl: './create-time-slot.component.html',
  styleUrls: ['./create-time-slot.component.css']
})
export class CreateTimeSlotComponent implements OnInit {

  timeSlot: TimeSlot = new TimeSlot();
  submitted = false;

  constructor(private timeSlotService: TimeSlotService,
    private router: Router) { }

  ngOnInit() {
  }

  newTimeSlot(): void {
    this.submitted = false;
    this.timeSlot = new TimeSlot();
  }

  save() {
    this.timeSlotService
    .createTimeSlot(this.timeSlot).subscribe(data => {
      console.log(data)
      this.timeSlot = new TimeSlot();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getAllTimeSlot']);
  }

}

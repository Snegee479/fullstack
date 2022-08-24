import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSlot } from 'src/app/time-slot';
import { TimeSlotService } from 'src/app/time-slot.service';

@Component({
  selector: 'app-updatetime-slot',
  templateUrl: './updatetime-slot.component.html',
  styleUrls: ['./updatetime-slot.component.css']
})
export class UpdatetimeSlotComponent implements OnInit {

  id!: number;
  timeSlot: TimeSlot = new TimeSlot();

  constructor(private route: ActivatedRoute,private router: Router,
    private timeSlotService: TimeSlotService) { }

  ngOnInit() {
    this.timeSlot = new TimeSlot();

    this.id = this.route.snapshot.params['id'];
    
    this.timeSlotService.findByTimeId(this.id)
      .subscribe((data: TimeSlot) => {
        console.log(data+" fetched from findbytimeid")
        this.timeSlot = data;
        console.log(this.timeSlot.timeId+" fetched from findbytimeid")

      }, (error: any) => console.log(error));
  }

  updateTimeSlot() {
    this.timeSlotService.updateTimeSlot(this.id, this.timeSlot)
      .subscribe((data: any) => {
        console.log(data+" this is updatetimeslot mthd");
        this.timeSlot = new TimeSlot(); 
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateTimeSlot();    
  }

  gotoList() {
    this.router.navigate(['/getAllTimeSlot']);
  }
}
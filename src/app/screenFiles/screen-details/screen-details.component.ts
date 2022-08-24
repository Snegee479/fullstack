import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenService } from 'src/app/screen.service';
import { Screen} from '../screen';
@Component({
  selector: 'app-screen-details',
  templateUrl: './screen-details.component.html',
  styleUrls: ['./screen-details.component.css']
})
export class ScreenDetailsComponent implements OnInit {
  id!: number;
  screen!: Screen;

  constructor(private route: ActivatedRoute,private router: Router,
    private screenService: ScreenService) { }

  ngOnInit() {
    this.screen = new Screen();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.screenService.findByScreenId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.screen = data;
      }, (error: any) => console.log(error));
  }

  list(){
    this.router.navigate(['getAllScreen']);
  }

}

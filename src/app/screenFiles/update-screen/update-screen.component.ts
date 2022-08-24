import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenService } from 'src/app/screen.service';
import { Screen } from '../screen';
@Component({
  selector: 'app-update-screen',
  templateUrl: './update-screen.component.html',
  styleUrls: ['./update-screen.component.css']
})
export class UpdateScreenComponent implements OnInit {
  id!: number;
  screen: Screen = new Screen();

  constructor(private route: ActivatedRoute,private router: Router,
    private screenService: ScreenService) { }

  ngOnInit() {
    this.screen = new Screen();

    this.id = this.route.snapshot.params['id'];
    
    this.screenService.findByScreenId(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.screen = data;
      }, (error: any) => console.log(error));
  }

  updateScreen() {
    this.screenService.updateScreen(this.id, this.screen)
      .subscribe((data: any) => {
        console.log(data);
        this.screen = new Screen();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateScreen();    
  }

  gotoList() {
    this.router.navigate(['/getAllScreen']);
  }
}
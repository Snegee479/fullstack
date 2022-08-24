import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ScreenService } from 'src/app/screen.service';
import { Screen} from '../screen';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  screen!: Observable<Screen[]>;
  screenList:any;
  constructor(private screenService: ScreenService,
    private router: Router,private httpClient: HttpClient) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.screen = this.screenService.getScreen();

    this.screenService.getScreen().subscribe((resp:any)=>{
      this.screenList = resp;
    });
    // this.httpClient.get('http://localhost:8080/getAllScreen').subscribe({
    //   next(value) {
    //     this.screenList = value;
    //     console.log(this.screenList)
    //   },
    // })
    console.log(this.screen)
  }

  deleteScreen(id: number) {
    this.screenService.deleteScreen(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

  findByScreenId(id: number){
    this.router.navigate(['findByScreenId', id]);
  }
  updateScreen(id: number){
    this.router.navigate(['updateScreen', id]);
  }
}
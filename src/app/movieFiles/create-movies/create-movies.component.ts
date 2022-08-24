import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../movies';
import { MoviesService } from '../../movies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {

  title = 'ImageUploaderFrontEnd';

  selectedFile:any;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  movie: Movies = new Movies();
  submitted = false;

  constructor(private moviesService: MoviesService,private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movies();
  }

  save() {
  //   Object.entries(this.movie).forEach(([key,value],index)=>{

  //       this.movie.pic = this.selectedFile;
  //       console.log(key,value,index);
  //  });
    this.moviesService
    .createMovie(this.movie,this.selectedFile).subscribe(data => {
      console.log(data)
      this.movie = new Movies();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {

    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getAllMovies']);
  }
  onUpload(){  const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  
  
    this.httpClient.post('http://localhost:8080/', uploadData)
    .subscribe(
                 res => {console.log(res);
                         this.receivedImageData = res;
                         this.base64Data = this.receivedImageData.pic;
                         this.convertedImage = 'data:image/jpeg/jpg;base64,' + this.base64Data; },
                 err => console.log('Error Occured duringng saving: ' + err)
              );
  }
  onFileChanged(event:Event){console.log(event);
    this.selectedFile = (event.target as HTMLInputElement).files;
    console.log(this.selectedFile);
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (event2) => {
      this.imgURL = reader.result;}

}
}
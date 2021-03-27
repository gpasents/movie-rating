import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IMovie } from '../movie';
import { IRatings } from '../ratings';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor( private http: HttpClient) { }

  value : string
  mydata :IMovie
  ngOnInit() {
    
}

onClick(){
  this.http.get<any>("http://www.omdbapi.com/?t=" + this.value + "&apikey=7aa8f852")
  .subscribe(
    data => {
      this.mydata = data;
    } 

  )
}


}

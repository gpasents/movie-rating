import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from '../movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private http: HttpClient,private route:Router) { }

  value:string;
  mydata :IMovie
  ngOnInit(): void {
    this.http.get<any>("http://www.omdbapi.com/?t="+ this.router.snapshot.params.value +"&apikey=7aa8f852")
    .subscribe(
      data => {
        this.mydata = data;
        console.log(data);
        console.log(this.router.snapshot.params)
      }
    )
  }
  changeView(){
    this.route.navigateByUrl('', {skipLocationChange: true})
    .then(()=>this.route.navigateByUrl('/results/'+this.value));

  }

}

import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Movie } from '../model/movie'
import { MovieSearchService } from './movie-search.service'
import  { MovieDetailComponent } from '../movie-detail/movie-detail.component'

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers :[MovieSearchService]
})
export class MovieSearchComponent implements OnInit {

movie="";
  reference ="";
   ref:Movie;
   p=1;

   title="BookMovies";
   poster_path="";
   release_date="";
@Output() termData = new EventEmitter();
  constructor(private mainservice:MovieSearchService){}
  
  movieSearch(): any{ 	
   this.mainservice.getmovies(this.movie)
   .subscribe(ref=>{
 	this.termData.emit(ref);
 });
   
}


  handleTermData(ref){
    this.movie=ref;
  }


  ngOnInit() {
     this.mainservice.getmovies(this.movie)
   .subscribe(ref=>
   this.termData.emit(ref));
 }
  

}

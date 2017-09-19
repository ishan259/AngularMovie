import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieSearchService {

     ExpressUrl = 'http://localhost:3002'
  constructor(private http:Http){}
  getmovies(movie:any){
    
  	const API_KEY="?api_key=435c7153d573650556c366889ce90732";
  	const URL="https://api.themoviedb.org/3/";
  	const SEARCH="search/movie";
  	const QUERY="&query=";
    if (movie==" ") {
	  window.alert("Please Enter The Data");    
}

 return this.http.get(URL+SEARCH+API_KEY+QUERY+movie)
 .map((res:Response)=>res.json());
  
  }

handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

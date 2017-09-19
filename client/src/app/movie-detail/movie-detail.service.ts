import {Injectable} from '@angular/core';
import {Headers, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Movie } from '../model/movie';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieDetailService {

ExpressUrl= 'http://localhost:3002';
  constructor(private http:Http) { }

   getMovie(this): Observable<Movie> {
    const url = `${this.ExpressUrl}/`;
     return this.http.get(url)
       .map(response => response.json() as Movie)
       .catch(this.handleError);
   }


   deletedata(id:number):Observable<Movie>
   {
     const delUrl = `${this.ExpressUrl}/deletee/${id}`;
     return this.http.delete(delUrl).map(res=> res.json() as Movie).catch(this.handleError)
   }


  onLike(id:number, vote_count:number): Observable<Movie>{
    const myurl = `${this.ExpressUrl}/like/${id}`;
    return this.http.put(myurl,{id:id,vote_count:vote_count})
    .map(response => response.json() as Movie, (error)=>error.json())
    
  }

onDisLike(id:number, vote_count:number): Observable<Movie>{
    const myurl = `${this.ExpressUrl}/like/${id}`;
    return this.http.put(myurl,{id:id, vote_count:vote_count})
    .map(response => response.json() as Movie, (error)=>error.json())
    
  }



handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

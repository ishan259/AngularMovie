import {Injectable} from '@angular/core';
import {Headers, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Movie } from '../model/movie';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieListService {
ExpressUrl= 'http://localhost:3002';
constructor(private http:Http){}
  getMovie(): Observable<Movie> {
    const url = `${this.ExpressUrl}/`;
     return this.http.get(url)
       .map(response => response.json() as Movie)
       .catch(this.handleError);
   }

create(id:number,title:string, poster_path:string, release_date:string, vote_count:number ): Observable<Movie> {
    const insUrl=`${this.ExpressUrl}/users`;
    return this.http
      .post(insUrl, {id:id, title:title, poster_path:poster_path, release_date:release_date, vote_count:vote_count})
      .map(res => res.json() as Movie)
      .catch(this.handleError);
  }


handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


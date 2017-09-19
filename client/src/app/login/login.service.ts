import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';
@Injectable()
export class LoginService {

  constructor(private http:Http) { }

login(): Observable<any>{
  	const url="http://localhost:3002/register";
  	//console.log(data);
  	return this.http
  	.get(url)
  	.map((res:Response)=> res.json() as User);

  }


 /* login(info:any): Observable<any>{
  	const url="http://localhost:3003/login";

  	return this.http
  	.post(url,info)
  	.map((res:Response)=><any>res.json());

  }*/

}

import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {

  constructor(private http: Http) { }
   register(data:any){
   	console.log(data)
	const url="http://localhost:3002/register";
	return this.http
	.post(url,data)
	.map((res:Response)=>{res.json() as User; console.log(data)});
}

}
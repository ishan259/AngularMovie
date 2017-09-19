import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
	data:any={};
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

rightCredential(){
	alert("successfully login")
	this.router.navigateByUrl('movie-search')
}
wrongCredential(){
	alert("wrong credential")
	
	this.router.navigateByUrl('login')
}


  enter(data:any){

 console.log(data);



data
.filter((event)=>{return (event.email.includes(this.data.email)&&event.password.includes(this.data.password)) ? this.rightCredential():this.wrongCredential()})
/*.map(()=>{
if(false)
{
   
	alert("Wrong  Credential");
	this.router.navigateByUrl('login');
	
}
/*if(false){
	
	alert("Wrong Credentials")
	this.router.navigateByUrl('login');
}*//*})
}*/
}
  login(data)
	{
		console.log( 'login User' +data)
		console.log(this.data)
	this.loginService.login()
	.subscribe(data=>this.enter(data));
	}

}


/*enter(data:any){

	console.log(data);
if(data.Message==="Success")
{
	console.log("successfully login");
	this.router.navigateByUrl('/Header');
	//alert("successfully login");
}else{
	console.log("Not Login")
}
}
//console.log(this.info);




login()
{
	this.loginUser.login(this.data)
	.subscribe((data)=>{this.enter(data) });
		
//	console.log(this.info);
}

}
*/
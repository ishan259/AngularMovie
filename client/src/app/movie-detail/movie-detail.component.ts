import { Component, OnInit , Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {NgModule} from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Http,Response} from '@angular/http';

import {MovieDetailService} from './movie-detail.service';
import { Movie } from '../model/movie';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieDetailService]
})
export class MovieDetailComponent implements OnInit {

@Input() userDetail:Movie;
ref:Movie;
movie="";
flag=0;

constructor(private moviedetailservice:MovieDetailService) { }
   

movieDisplay():any{
  
}

movieDelete(object):any{
this.moviedetailservice.deletedata(object.id).subscribe(ref=>{this.ref=ref})

}


 onLikeEvent(object){
     this.flag=this.flag+1;
      if(this.flag%2==1)
         { this.moviedetailservice.onLike(object.id,++object.vote_count).subscribe(ref=>this.ref=ref)}
       if(this.flag%2==0)
         { this.moviedetailservice.onDisLike(object.id,--object.vote_count).subscribe(ref=>this.ref=ref)}

     }

 

 ngOnInit() {
     this.moviedetailservice.getMovie()
   .subscribe(ref=>{ this.ref=ref; return this.ref;});

  }






}

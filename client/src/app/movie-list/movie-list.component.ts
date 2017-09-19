import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {NgModule} from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Http,Response} from '@angular/http';

import {MovieListService} from './movie-list.service';
import { Movie } from '../model/movie';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[MovieListService]
})
export class MovieListComponent implements OnInit {
@Input() user:Movie;
ref:Movie;

@Output() userKey = new EventEmitter();
 constructor(private movielistservice:MovieListService){}



movieAdd(search):any{
  this.movielistservice.create(search.id, search.title, search.poster_path, search.release_date, search.vote_count)
.subscribe(ref=>{this.user=this.user})

}


  ngOnInit() {
  	
  }

}

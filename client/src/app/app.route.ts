import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent }from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

  const route:Routes =[
{
path:'',
redirectTo:'home',
pathMatch:'full'
},

{
path:'login',
component:LoginComponent
},


{
path:'home',
component:HomeComponent,
children: [ { path: 'movie-detail', component:MovieDetailComponent}]
},


{
	path:'register',
	component:RegisterComponent
},
{
	path:'movie-search/:name',
	component:MovieSearchComponent,
	

},
{
	path:'movie-list',
	component:MovieListComponent ,
	children: [ { path: 'movie-detail', component:MovieDetailComponent}]
},
{
	path:'movie-detail',
	component:MovieDetailComponent
}
];
@NgModule({
	imports :[RouterModule.forRoot(route)],
	exports:[RouterModule]
	
})
export class AppRoutingModule {}
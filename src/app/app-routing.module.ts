import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRideComponent } from './search-ride/search-ride.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [
  {path : 'search' , component: SearchRideComponent},
  {path : 'add' , component: AddRideComponent},
  {path : 'view' , component: ViewAllComponent},
  {path : '' , component: AddRideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

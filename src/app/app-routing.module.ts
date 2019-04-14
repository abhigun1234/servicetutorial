import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductdetailsComponent} from './productdetails/productdetails.component'
import {ProductlistComponent} from './productlist/productlist.component'
const routes: Routes = [
  {'path':"products",component:ProductlistComponent},
  {'path':"products/:id", component:ProductdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

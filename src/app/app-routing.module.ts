import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/page/home/home.component";
import {ViewProductComponent} from "./component/page/view-product/view-product.component";

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path :'products',component:ViewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

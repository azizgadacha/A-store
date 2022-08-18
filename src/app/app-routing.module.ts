import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {ProductsListeComponent} from "./component/products-liste/products-liste.component";

const routes: Routes = [
  {path :'product',component:ProductComponent},
  {path :'products',component:ProductsListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

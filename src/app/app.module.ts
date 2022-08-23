import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './component/pageCompoesent/product/product.component';
import {NavBarComponent} from "./component/pageCompoesent/nav-bar/nav-bar.component";
import { FooterComponent } from './component/pageCompoesent/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListeComponent } from './component/pageCompoesent/products-liste/products-liste.component';
import { HomeComponent } from './component/page/home/home.component';
import { HeaderBarComponent } from './component/pageCompoesent/header-bar/header-bar.component';
import { SliderComponent } from './component/pageCompoesent/slider/slider.component';
import { BennifitsComponent } from './component/pageCompoesent/bennifits/bennifits.component';
import { LastProductComponent } from './component/pageCompoesent/last-product/last-product.component';
import { BrandsComponent } from './component/pageCompoesent/brands/brands.component';
import { BestComponent } from './component/pageCompoesent/best/best.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    FooterComponent,
    ProductsListeComponent,
    HomeComponent,
    HeaderBarComponent,
    SliderComponent,
    BennifitsComponent,
    LastProductComponent,
    BrandsComponent,
    BestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

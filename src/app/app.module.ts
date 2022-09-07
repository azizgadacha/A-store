import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {NavBarComponent} from "./component/pageCompoesent/nav-bar/nav-bar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './component/page/home/home.component';

import { HeaderComponent } from './component/pageCompoesent/header/header.component';
import { LocationComponent } from './component/pageCompoesent/location/location.component';
import { FilterSideComponent } from './component/pageCompoesent/filter-side/filter-side.component';
import { ProductListeComponent } from './component/pageCompoesent/product-liste/product-liste.component';
import { ViewProductComponent } from './component/page/view-product/view-product.component';
import { FooterComponent } from './component/pageCompoesent/footer/footer.component';
import {ProductComponent} from "./component/pageCompoesent/product/product.component";
import { SliderComponent } from './component/pageCompoesent/slider/slider.component';
import { BenifitsComponent } from './component/pageCompoesent/benifits/benifits.component';
import { CategorieComponent } from './component/pageCompoesent/categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,

    HeaderComponent,
    LocationComponent,
    FilterSideComponent,
    ProductListeComponent,
    ViewProductComponent,
    FooterComponent,
    ProductComponent,
    SliderComponent,
    BenifitsComponent,
    CategorieComponent,
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

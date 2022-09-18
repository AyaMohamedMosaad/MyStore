import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCardComponent } from './Components/add-to-card/add-to-card.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { CardComponent } from './Components/card/card.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    AddToCardComponent,
    SpinnerComponent,
    CardComponent,
    ConfirmationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

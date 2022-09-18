import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCardComponent } from './Components/add-to-card/add-to-card.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';

const routes: Routes = [
  {path:"Products",component:ProductsListComponent},
  {path:"Card",component:AddToCardComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"Confirmation",component:ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

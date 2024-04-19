import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { ProductsdetailsComponent } from './products/components/productsdetails/productsdetails.component';

const routes: Routes = [
  { path: 'products', component: AllproductsComponent },
  { path: 'cart', component: CartsComponent },
  { path: 'details/:id', component: ProductsdetailsComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

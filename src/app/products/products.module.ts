import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductComponent,
    ProductsdetailsComponent
    
  ],
  imports: [
    CommonModule,
    AllproductsComponent,
    SharedModule
    ],
    exports:[
      ProductComponent,
      ProductsdetailsComponent
    ]
})
export class ProductsModule { }

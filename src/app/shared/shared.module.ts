import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './compoents/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { CartsComponent } from '../carts/components/carts/carts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    SelectComponent,
    ProductComponent,
    CartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
     ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    CartsComponent
  ],
})
export class SharedModule { }

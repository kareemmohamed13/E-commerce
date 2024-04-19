import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsService } from './products/services/products.service';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './products/components/productsdetails/productsdetails.component';
import { NewComponent } from './new/new.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    ProductsdetailsComponent,
    NewComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
          ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

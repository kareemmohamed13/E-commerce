import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartproducts:any[]=[]

  ngOnInit(): void {
    this.getCartProducts()
    
}
getCartProducts(){
  if ("cart" in localStorage){
    this.cartproducts= JSON.parse(localStorage.getItem("cart"  )!)
  }
  console.log(this.cartproducts)
}

}
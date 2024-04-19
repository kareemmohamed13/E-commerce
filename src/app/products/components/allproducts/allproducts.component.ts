import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: any[] = [];
  categories : any[]=[]
 loading :boolean= false
 errr:any
cartproducts:any[]=[]  
  constructor(private service: ProductsService , private router :Router) { }

  ngOnInit() {
    this.getAllproducts();
    this.getCategorys();
  }

  getAllproducts() {
    this.loading=true
    this.service.getAllproducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading=false

        console.log(this.products);
      },
      (err: any) => {
        this.loading=false
        this.errr=err

      },
      () => {
        console.log('All products retrieved');
      }
    );
  }

  getCategorys() {
    this.loading=true
    this.service.getAllcategory().subscribe((res :any) => {
      this.categories=res;
      this.loading=false

      console.log(this.categories)
    });
  }

  filterCategory(event:any) {
    let catvalue= event.target.value;
    console.log(catvalue);
    if (catvalue == "all") {
      this.getAllproducts();
    }
    else {
      this.getproductscat(catvalue);
    }
  }

  getproductscat(category: any) {
    this.loading=true

    this.service.getProductsbycat(category).subscribe(
      (res:any) => {
        this.products=res;
        this.loading=false

      }
    );
  }

 
  
  addToCart(event:any){
    console.log(event)
    if ("cart" in localStorage){
      this.cartproducts= JSON.parse(localStorage.getItem("cart"  )!)
      let exist =this.cartproducts.find(item=> item.item.id == event.item.id )
      this.cartproducts.push(event)
      if(exist)
      {
        alert("product is already in your cart")
      }
      
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    }
    else{     
       this.cartproducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
}
  }

  goto(product:any){
this.router.navigate(["/details",product.id])
console.log("hola")
  }
}
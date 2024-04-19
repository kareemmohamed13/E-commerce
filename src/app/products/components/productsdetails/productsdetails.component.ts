import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss'],
})
export class ProductsdetailsComponent implements OnInit {
  data: any;
  id: any;
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.id + 'which i get from routerlink url');
    this.getProductbyid();
  }
  getProductbyid() {
    this.loading=true
    this.service.getProductbyid(this.id).subscribe((res) => {
      this.loading=false
      this.data = res;
      console.log(res);
    });
  }
}

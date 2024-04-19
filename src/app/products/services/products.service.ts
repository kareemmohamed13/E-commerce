import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError ,throwError} from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllproducts(){
    return this.http.get(environment.apiUrl + '/products').pipe(
      catchError(error => {
        return throwError(error.message || 'Server error');
      })
    );
  }
  getAllcategory(){
    return this.http.get(environment.apiUrl +"/products/categories")
  }

  getProductsbycat(category:any){
    return this.http.get(environment.apiUrl +"/products/category/"+ category )
  }

  getProductbyid(id:any){
  return  this.http.get(environment.apiUrl + "/products/"+id)
  }
}
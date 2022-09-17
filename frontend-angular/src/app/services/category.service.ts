import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../components/common/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = "http://localhost:8080/api/productCategories";

  constructor(private httpClient : HttpClient) { }

  getCategoryList() : Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponse> (this.baseUrl).pipe(
      map(response => response._embedded.productCategories)
    );
  } 
}

interface GetResponse {
  _embedded : {
    productCategories : ProductCategory[];
  }
}

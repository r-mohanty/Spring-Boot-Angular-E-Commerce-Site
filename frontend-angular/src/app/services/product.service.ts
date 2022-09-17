import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products/search/findBycategoryId?id=";
  
  private searchUrl = "http://localhost:8080/api/products/search/findByNameContaining?keyword=";

  constructor(private httpClient : HttpClient) { }

  getProductList(categoryID : number) : Observable<Product[]> {
    return this.httpClient.get<GetProductResponse> (this.baseUrl + categoryID).pipe(
      map(response => response._embedded.products)
    );
  }

  searchProducts(keyword : String) : Observable<Product[]> {
    return this.httpClient.get<GetProductResponse> (this.searchUrl + keyword).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetProductResponse {
  _embedded : {
    products : Product[];
  }
}
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../common/product';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from '../common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  currentCategoryId : number;
  keyword : String;

  constructor(private productService : ProductService,
              private route: ActivatedRoute,
              private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() : void {

    if (this.route.snapshot.paramMap.has('keyword')) {
      this.keyword = this.route.snapshot.paramMap.get('keyword')!;
      console.log("Product List Component Routed with keyword " + this.keyword);
      this.productService.searchProducts(this.keyword).subscribe(
        data => {
          this.products = data;
        }
      );
    } else {
      if (this.route.snapshot.paramMap.has('id')) {
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      } else {
        this.currentCategoryId = 1;
      }
      this.productService.getProductList(this.currentCategoryId).subscribe(
        data => {
          this.products = data;
        }
      );
    }
  }

  addToCart(theProduct : Product) {
    let theCartItem : CartItem = new CartItem(theProduct);
    this.cartService.updateCart(theCartItem);
  }

}

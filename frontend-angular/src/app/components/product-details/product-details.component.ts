import { Component, OnInit } from '@angular/core';
import { ProdetailsService } from 'src/app/services/prodetails.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from '../common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product_detail : Product = new Product();

  constructor(private proDetails : ProdetailsService,
              private cartService : CartServiceService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProductDetails();
    });
  }

  getProductDetails() : void {
    this.proDetails.getProductDetails(+this.route.snapshot.paramMap.get('id')!)
    .subscribe(data => {
      this.product_detail = data
    });
  }

  addToCart() {
    let theCartItem : CartItem = new CartItem(this.product_detail);
    this.cartService.updateCart(theCartItem);
  }

}

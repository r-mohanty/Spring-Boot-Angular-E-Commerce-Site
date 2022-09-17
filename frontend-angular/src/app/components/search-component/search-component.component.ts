import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  searchProducts(keyword : String) : void {
    console.log("Search Products method captured " + keyword);
    this.router.navigateByUrl("/search/" + keyword);
  }

}

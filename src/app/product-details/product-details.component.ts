import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:object;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart (product:object) {
    this.cartService.addToCart(product)
    window.alert("Sucessfully added to cart!")
  }

  ngOnInit() {
    console.log(this.cartService)
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models';

import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product;
  itemInCart: number;

  displayedImg = 0;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);

    this.cartService.cartItems.subscribe((d) => {
      this.itemInCart = d.length;
      console.log(d);
    });
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}

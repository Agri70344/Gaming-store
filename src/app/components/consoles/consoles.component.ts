import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss'],
})
export class ConsolesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}

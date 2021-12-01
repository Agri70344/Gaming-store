import { Component, OnInit } from '@angular/core';

declare const ready: any;
declare const addToCart: any;
declare const purchaseClicked: any;
declare const removeCartItem: any;
declare const quantityChanged: any;
declare const addToCartClicked: any;
declare const addItemToCart: any;
declare const updateCartTotal: any;

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss']
})
export class ConsolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new ready();
    new  addToCart();
    new purchaseClicked();
    new removeCartItem();
    new quantityChanged();
    new addToCartClicked();
    new addItemToCart;
    new updateCartTotal();
  }
   

}

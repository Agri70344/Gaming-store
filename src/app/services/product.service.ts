import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Play Station',
      'PlayStation 5 was released worldwide on November 12, 2020,and is part of the ninth generation of video game consoles.',
      125,
      1,
      [
        'assets/images/consoles/playStation.jpeg',
        'assets/images/consoles/playStation-aa1.jpeg',
        'assets/images/consoles/playstationVR-aa2.jpeg',
      ]
    ),

    new Product(
      2,
      'Xbox',
      ' The Xbox Series X is estimated to be four times as powerful as Xbox One X, with support for 8K resolution and up to 120 frames-per-second rendering, with a nominal target of 4K resolution at 60 frames per second. ',
      130,
      1,
      [
        'assets/images/consoles/xbox.jpeg',
        'assets/images/consoles/xbox-aa1.jpeg',
        'assets/images/consoles/xbox-aa2.jpeg',
      ]
    ),

    new Product(
      3,
      'Nintento',
      'The Switch features a hybrid design as a home and handheld console, independently functioning Joy-Con controllers that each contain an accelerometer and gyroscope, and the simultaneous wireless connection of up to eight consoles.',
      100,
      1,
      [
        'assets/images/consoles/nintendo.jpeg',
        'assets/images/consoles/n64.jpeg',
        'assets/images/consoles/psp.jpeg',
      ]
    ),

    new Product(
      1,
      'Play Station',
      'PlayStation 5 was released worldwide on November 12, 2020, and, alongside the Xbox Series X and Series S released the same month, is part of the ninth generation of video game consoles.',
      125,
      1,
      [
        'assets/images/consoles/playStation.jpeg',
        'assets/images/consoles/playStation-aa1.jpeg',
        'assets/images/consoles/playStationVR-aa2.jpeg',
      ]
    ),

    new Product(
      2,
      'Xbox',
      ' The Xbox Series X is estimated to be four times as powerful as Xbox One X, with support for 8K resolution and up to 120 frames-per-second rendering, with a nominal target of 4K resolution at 60 frames per second. ',
      130,
      1,
      [
        'assets/images/consoles/xbox.jpeg',
        'assets/images/consoles/xbox-aa1.jpeg',
        'assets/images/consoles/xbox-aa2.jpeg',
      ]
    ),

    new Product(
      3,
      'Nintento',
      'The Switch features a hybrid design as a home and handheld console, independently functioning Joy-Con controllers that each contain an accelerometer and gyroscope, and the simultaneous wireless connection of up to eight consoles.',
      100,
      1,
      [
        'assets/images/consoles/nintendo.jpeg',
        'assets/images/consoles/n64.jpeg',
        'assets/images/consoles/psp.jpeg',
      ]
    ),
    new Product(
      1,
      'Play Station',
      'PlayStation 5 was released worldwide on November 12, 2020, and, alongside the Xbox Series X and Series S released the same month, is part of the ninth generation of video game consoles.',
      125,
      1,
      [
        'assets/images/consoles/playStation.jpeg',
        'assets/images/consoles/playStation-aa1.jpeg',
        'assets/images/consoles/playStationVR-aa2.jpeg',
      ]
    ),

    new Product(
      2,
      'Xbox',
      ' The Xbox Series X is estimated to be four times as powerful as Xbox One X, with support for 8K resolution and up to 120 frames-per-second rendering, with a nominal target of 4K resolution at 60 frames per second. ',
      130,
      1,
      [
        'assets/images/consoles/xbox.jpeg',
        'assets/images/consoles/xbox-aa1.jpeg',
        'assets/images/consoles/xbox-aa2.jpeg',
      ]
    ),

    new Product(
      3,
      'Nintento',
      'The Switch features a hybrid design as a home and handheld console, independently functioning Joy-Con controllers that each contain an accelerometer and gyroscope, and the simultaneous wireless connection of up to eight consoles.',
      100,
      1,
      [
        'assets/images/consoles/nintendo.jpeg',
        'assets/images/consoles/n64.jpeg',
        'assets/images/consoles/psp.jpeg',
      ]
    ),

    new Product(
      1,
      'Play Station',
      'PlayStation 5 was released worldwide on November 12, 2020, and, alongside the Xbox Series X and Series S released the same month, is part of the ninth generation of video game consoles.',
      125,
      1,
      [
        'assets/images/consoles/playStation.jpeg',
        'assets/images/consoles/playStation-aa1.jpeg',
        'assets/images/consoles/playStationVR-aa2.jpeg',
      ]
    ),

    new Product(
      2,
      'Xbox',
      ' The Xbox Series X is estimated to be four times as powerful as Xbox One X, with support for 8K resolution and up to 120 frames-per-second rendering, with a nominal target of 4K resolution at 60 frames per second. ',
      130,
      1,
      [
        'assets/images/consoles/xbox.jpeg',
        'assets/images/consoles/xbox-aa1.jpeg',
        'assets/images/consoles/xbox-aa2.jpeg',
      ]
    ),

    new Product(
      3,
      'Nintento',
      'The Switch features a hybrid design as a home and handheld console, independently functioning Joy-Con controllers that each contain an accelerometer and gyroscope, and the simultaneous wireless connection of up to eight consoles.',
      100,
      1,
      [
        'assets/images/consoles/nintendo.jpeg',
        'assets/images/consoles/n64.jpeg',
        'assets/images/consoles/psp.jpeg',
      ]
    ),
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}

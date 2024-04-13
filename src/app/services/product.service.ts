import { Injectable } from '@angular/core';

const products = [
  {
    id: 1,
    name: 'fall limited edition sneakers',
    priceOriginal: 250,
    priceAfterDiscount: 125,
    discount: 50,
    company: 'sneaker company',
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they'll withstand everything the weather can offer`,
  },
  {
    id: 2,
    name: 'Helium',
    priceAfterDiscount: 4.0026,
    company: 'He',
    quantity: 3,
  },
  {
    id: 3,
    name: 'Lithium',
    priceAfterDiscount: 6.941,
    company: 'Li',
    quantity: 3,
  },
  {
    id: 4,
    name: 'Beryllium',
    priceAfterDiscount: 9.0122,
    company: 'Be',
    quantity: 3,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsService(id: number = 1) {
    return products;
  }
}

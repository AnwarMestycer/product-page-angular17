import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import {MatTableModule} from '@angular/material/table';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
 cart: Cart = {
  items: [

  ]
 }
 dataSource: Array<CartItem> = [];

  constructor (private cartService : CartService){}
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart : Cart) => {
      
      console.log("cart", _cart)
      console.log("source", this.dataSource);
      
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }
  
  displayedColumns: string[] = ['id', 'name', 'company', 'quantity', 'priceAfterDiscount'];
}

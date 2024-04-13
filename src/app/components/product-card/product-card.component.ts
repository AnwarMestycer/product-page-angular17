import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isPreviewMode = false
  quantity : number = 0;
  product : Product = {
    id : 1,
    name : "fall limited edition sneakers",
    priceOriginal : 250,
    priceAfterDiscount : 125,
    discount : 50,
    company : "sneaker company",
    description : `These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they'll withstand everything the weather can offer`,
}
  @Output() addToCart = new  EventEmitter();
constructor(private cartService : CartService){}
currentpicture : number = 1;
togglePreview() {
  this.isPreviewMode = !this.isPreviewMode;
}

nextPicture(){
  if(this.currentpicture <=3){

    this.currentpicture = this.currentpicture + 1;
  }
  else {
    this.currentpicture = 1;
  }
}
previousPicture(){
  if(this.currentpicture >= 2)
    {
      
  this.currentpicture = this.currentpicture - 1;
}
else{

  this.currentpicture = 4;
}
}

  onAddToCart():void{
    this.cartService.AddToCart({
      id: 1,
      name: "fall limited edition sneakers",
      priceAfterDiscount: 125,
      company: "sneaker company",
      quantity : this.quantity
    })
  }

  addQuantity(){
    this.quantity = this.quantity + 1;
  }
  ReduceQuantity(){
    this.quantity -= 1;
  }
}

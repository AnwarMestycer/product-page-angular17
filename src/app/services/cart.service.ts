import { BehaviorSubject, Observable } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
    providedIn : "root"
})

export class CartService {

    cart = new BehaviorSubject<Cart>({items : []})

    AddToCart(item : CartItem):void{
        const items = [...this.cart.value.items]
        
        const itemInCart = items.find((_item) =>_item.id === item.id)
        if(itemInCart){
            itemInCart.quantity += 1;
            console.log("quantity increased")

        }else{
            items.push(item);
            console.log("added to cart")
        }

        this.cart.next({
            items
        })
    }
}

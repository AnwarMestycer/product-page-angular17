export interface Cart {
  items : Array<CartItem>;

}


export interface CartItem {
    id: number,
    name: string;
    priceAfterDiscount: number;
    company: string;
    quantity : number,
  }
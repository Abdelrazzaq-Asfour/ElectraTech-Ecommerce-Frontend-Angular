import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  cartItems: CartItem[] = [
    { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
    { id: 2, name: 'Headphones', price: 150, quantity: 2 }
  ];

  get total(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}

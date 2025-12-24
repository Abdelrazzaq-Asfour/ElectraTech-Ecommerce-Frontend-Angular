import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
  
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateTotal(); 
  }

  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
    this.totalPrice = 0;
  }
}
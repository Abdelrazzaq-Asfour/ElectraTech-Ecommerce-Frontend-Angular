import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  getCartItems(): Product[] {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }
}
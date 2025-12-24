import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean = false; 

  constructor(private productService: ProductService) {}

 ngOnInit(): void {
    this.checkUserStatus(); // Update the status first
    this.loadProducts();    // Then load products
  }
  checkAdminStatus() {
    throw new Error('Method not implemented.');
  }
   // Make sure these variables exist in the class
isLoggedIn: boolean = false;

checkUserStatus(): void {
  const userData = localStorage.getItem('user');
  if (userData) {
    this.isLoggedIn = true; // This will show buttons instead of "Login" message
    const user = JSON.parse(userData);
    this.isAdmin = user.role === 'Admin'; 
  } else {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  // --- New add-to-cart function ---
  addToCart(product: Product): void {
    // 1. Get current cart or create a new one
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // 2. Add the product
    cart.push(product);
    
    // 3. Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 4. Dispatch 'storage' event to notify Navbar to update CartCount immediately
    window.dispatchEvent(new Event('storage'));
    
    alert(`${product.name} has been added to the cart!`);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}

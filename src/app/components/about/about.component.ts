import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ensure directives like *ngIf and *ngFor work in HTML
import { ProductService } from '../../services/product.service'; // Import the correct service
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-about', // Change the selector to be logical
  standalone: true,      // Ensure it's standalone to fit your project
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  products: Product[] = []; // Define the products array

  // Using ProductService instead of the non-existent CategoryService
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsPreview();
  }

  loadProductsPreview(): void {
    this.productService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.products = res.slice(0, 3); // Show only the first 3 products on the About page
        console.log('Products arrived at the About page:', res);
      },
      error: (err: any) => {
        console.error('Failed to fetch data for the About page', err);
      }
    });
  }
}

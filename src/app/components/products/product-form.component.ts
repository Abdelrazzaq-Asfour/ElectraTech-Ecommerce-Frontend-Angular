import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-form.component.html', 
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: number | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Define required fields
    this.productForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      image: [''],
      categoryId: [1],
      brandId: [1]
    });
  }

  ngOnInit(): void {
    // Check if there is an ID in the route (means edit mode)
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.isEditMode = true;
      this.loadProductForEdit();
    }
  }

  loadProductForEdit() {
    this.productService.getProductById(this.productId!).subscribe({
      next: (product) => this.productForm.patchValue(product),
      error: (err) => console.error('Error fetching product data', err)
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;

      if (this.isEditMode) {
        // Perform update
        this.productService.updateProduct(this.productId!, productData).subscribe({
          next: () => {
            alert('Product updated successfully');
            this.router.navigate(['/products']);
          }
        });
      } else {
        // Perform create
        this.productService.createProduct(productData).subscribe({
          next: () => {
            alert('Product added successfully');
            this.router.navigate(['/products']);
          }
        });
      }
    }
  }
}

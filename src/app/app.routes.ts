



import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component'; 
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthComponent } from './components/auth/auth.component';

import { ProductFormComponent } from './components/products/product-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  

  { path: 'products/create', component: ProductFormComponent },
 
  { path: 'products/edit/:id', component: ProductFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
 { path: 'auth', component: AuthComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'auth/login', redirectTo: 'auth', pathMatch: 'full' }
];
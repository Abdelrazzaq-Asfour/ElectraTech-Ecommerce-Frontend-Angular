import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  userName: string | null = null;
  userRole: string | null = null;
  currentUser: any = null; // Added this variable to store the full object

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateNavbarStatus();

    // Listen to storage changes (update when working in different tabs)
    window.addEventListener('storage', () => {
      this.updateNavbarStatus();
    });

    // Update status on router navigation (update in the same tab)
    this.router.events.subscribe(() => {
      this.updateNavbarStatus();
    });
  }

  updateNavbarStatus(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.currentUser = JSON.parse(userData); // Save the full object for updating
      this.userName = this.currentUser.fullName || this.currentUser.name;
      this.userRole = this.currentUser.role;
    } else {
      this.currentUser = null;
      this.userName = null;
      this.userRole = null;
    }
  }

  // New function to navigate to profile page
  goToProfile(): void {
    console.log("Update button clicked!"); // Will appear in the Console (F12)
    this.router.navigate(['/auth/login']).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.error('Navigation failed - make sure the route is defined in app.routes.ts');
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    this.updateNavbarStatus();
    this.router.navigate(['/auth']); // Adjusted to match your auth path
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}

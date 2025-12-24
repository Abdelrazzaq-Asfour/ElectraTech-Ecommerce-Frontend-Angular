import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string = '';
  password: string = '';
  fullName: string = ''; 
  isLoginMode: boolean = true; 
  isUpdateMode: boolean = false; 

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Edit: We only switch to update mode if the user came from the "Update Profile" button
    // We determine that if the user is logged in and the current route is the one set for update
    const storedUser = localStorage.getItem('user');
    if (storedUser && this.router.url.includes('auth')) {
       this.prepareUpdateMode(JSON.parse(storedUser));
    }
  }

  // Helper function to prepare update data
  private prepareUpdateMode(user: any) {
    this.isUpdateMode = true;
    this.isLoginMode = false;
    this.fullName = user.fullName || user.name || '';
    this.email = user.email || '';
    this.password = ''; // Password remains empty unless the user wants to change it
  }

  toggleMode() {
    this.isUpdateMode = false;
    this.isLoginMode = !this.isLoginMode;
    // Clear fields when switching between login and register
    this.fullName = '';
    this.email = '';
    this.password = '';
  }

  cancelUpdate() {
    this.isUpdateMode = false;
    this.isLoginMode = true;
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.router.navigate(['/']); // Go back to home on cancel
  }

  onSubmit() {
    if (this.isUpdateMode) {
      this.onUpdate();
    } else if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    const loginData = { email: this.email.trim(), password: this.password.trim() };
    this.authService.loginUser(loginData).subscribe({
      next: (user: any) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          window.dispatchEvent(new Event('storage'));
          this.router.navigate(['/products']);
        }
      },
      error: (err) => alert(err.error?.message || 'Login failed.')
    });
  }

  register() {
    const newUser = { 
      fullName: this.fullName, 
      email: this.email, 
      password: this.password, 
      role: 'User' 
    };
    this.authService.register(newUser).subscribe({
      next: (res: any) => {
        alert(res.message || 'Registration successful!');
        this.isLoginMode = true; 
      },
      error: (err) => alert(err.error?.message || 'Registration failed.')
    });
  }

onUpdate() {
  // Get the stored user data after login
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = storedUser.id; // This is the id expected by the server in [HttpPut("update/{id}")]

  if (!userId) {
    alert('Error: User ID not found. Please log in again.');
    return;
  }

  const updatedData = {
    fullName: this.fullName,
    email: this.email,
    password: this.password.trim() !== '' ? this.password : undefined
  };

  // Send request to port 5000
  this.authService.updateUser(userId, updatedData).subscribe({
    next: (res) => {
      alert('Data successfully updated in PostgreSQL database!');
      
      // Update local data to reflect the new name in the navbar immediately
      localStorage.setItem('user', JSON.stringify({ ...storedUser, fullName: this.fullName, name: this.fullName, email: this.email }));
      window.dispatchEvent(new Event('storage'));
      
      this.router.navigate(['/products']);
    },
    error: (err) => {
      console.error(err);
      alert('Update failed: Please ensure the server is running and data sent is correct.');
    }
  });
}
}

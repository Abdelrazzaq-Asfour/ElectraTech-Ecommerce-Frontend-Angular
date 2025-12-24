import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component'; // استيراد المكون الجديد

@Component({
  selector: 'app-root',
  standalone: true,
  // أضف FooterComponent هنا ليتم التعرف عليه في app.html
  imports: [RouterOutlet, NavbarComponent, FooterComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  // الكلاس الآن يعرف كيف يتعامل مع <app-footer>
}
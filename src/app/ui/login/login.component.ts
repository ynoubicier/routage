import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  private router = inject(Router);

  onLoggin() {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/'])
  }
}

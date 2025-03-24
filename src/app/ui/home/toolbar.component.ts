import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  private router = inject(Router);

  //A utiliser lorsque l'on a de la logique de la navigation programmatique
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

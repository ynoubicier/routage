import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  formData = {
    fullname: '',
    email: '',
    message: ''
  };

  onSubmit(contactForm: NgForm) {
    console.log("Données du formulaire", contactForm.value);
    contactForm.reset()
  }
}

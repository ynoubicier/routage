import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

@Component({
  selector: 'app-add-employee',
  imports: [RouterLink, TemplateDrivenFormComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export default class AddEmployeeComponent {

}

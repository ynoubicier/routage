import { Component } from '@angular/core';
//import { RouterLink } from '@angular/router';
//import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { NavigationBackToolbarComponent } from "../shared/navigation-back-toolbar/navigation-back-toolbar.component";

@Component({
  selector: 'app-add-employee',
  imports: [/* RouterLink,  */ReactiveFormComponent, NavigationBackToolbarComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export default class AddEmployeeComponent {
  fullName = history.state.fullName;
}

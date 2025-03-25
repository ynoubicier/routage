import { Component, input } from '@angular/core';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-info',
  imports: [],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.scss'
})
export class EmployeeInfoComponent {
  employee = input.required<Employee>()
}

import { Component, inject, input, OnInit } from '@angular/core';
import { NavigationBackToolbarComponent } from "../shared/navigation-back-toolbar/navigation-back-toolbar.component";
import { Employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';
import { EmployeeInfoComponent } from "../home/employee-info/employee-info.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-employee',
  imports: [NavigationBackToolbarComponent, EmployeeInfoComponent],
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.scss'
})
export default class DetailEmployeeComponent implements OnInit {


  id = input('id');
  employee!: Employee;
  private es = inject(EmployeeService);
  private router = inject(Router);
  private title = inject(Title);

  ngOnInit(): void {
    console.log(this.id());
    
    this.employee = this.es.getEmployee(Number(this.id()));

    if(this.employee)
    {
      this.title.setTitle(`${this.employee.fullName} - Yanova`)
    }else
    {
      this.router.navigate(['/']);
    }
  }

  onEditEmployee(id: string,employee: Employee)
  {
    employee.id = id;
    this.router.navigate(['/add-employee'], {
      state: employee
    }
    )
  }

  onDeleteEmployee(id: string)
  {
    this.es.deleteEmploye(Number(id));
    this.router.navigate(['/'])
  }
}

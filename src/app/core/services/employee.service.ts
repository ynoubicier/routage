import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = []; // Initialiser avec un tableau vide

  addEmployee = (employee: Employee) => this.employees.push(employee);

  getEmployees = () => this.employees

  getEmployee = (index:number) => this.employees[index];

  editEmployee = (i: number, e: Employee) => this.employees[i] = e;

  deleteEmploye = (index: number) => this.employees.splice(index, 1);
}

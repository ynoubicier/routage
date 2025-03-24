import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { EmployeeListComponent } from "./employee-list/employee-list.component";

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, EmployeeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent { }

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../../core/models/employee.model';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private es = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.nonNullable.group(
    {
      fullName: ['', [Validators.required]],
      email: ['',
         [
          Validators.required, 
          Validators.email,
          Validators.pattern(/^\S+@\S+\.\S+$/)
         ]
        ],
      phone: ['',
         [
          Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(13),
          Validators.pattern(/^\+?[1-9][0-9]{7,14}$/)]
        ],
      sexe: ['', [Validators.required]],
      address: this.fb.nonNullable.group({
          street: ['', [Validators.required]],
          city: ['', [Validators.required]],
          state: [''],
          country: ['', [Validators.required]]
        }),
      hobbies: this.fb.nonNullable.array([this.fb.nonNullable.control('', [Validators.required])]),
    });

    ngOnInit(): void {
      if(history.state.fullName)
      {
        const employee = history.state as Employee;
        this.employeeForm.patchValue(employee);
        this.removeHobbyForm(0);
        employee.hobbies.forEach((hobby) =>{
          const formControl =this.fb.nonNullable.control(hobby);
          this.employeeForm.controls.hobbies.push(formControl);
        })
      }
    }

    addHobbyForm(){
      const formControl = this.fb.nonNullable.control('');
      this.employeeForm.controls.hobbies.push(formControl)
    }

    removeHobbyForm(index:number){
      this.employeeForm.controls.hobbies.removeAt(index);
    }

    onSubmit() {
      if(this.employeeForm.valid)
      {
        const employee:Employee = {
          ...this.employeeForm.getRawValue()
        };
        if(history.state.id)
        {
          const index = Number(history.state.id);
          this.es.editEmployee(index, employee);
        }else {
          this.es.addEmployee(employee);
        }
        this.router.navigate(['/']);
      }else {
        this.employeeForm.markAllAsTouched();
      }
    }
}
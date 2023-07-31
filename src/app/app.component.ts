import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { take } from 'rxjs';

import { EmployeesService } from './services/employees.service'
import { Employee } from './interface/employee'
import { Searched } from './interface/searched'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assessment';

  employees: Employee[] = []
  loadMessage = {
    error: false,
    message: '',
  }

// search functionality variables
  employee: Searched = {
    name: 'name',
    found: false
  }
  searchForm!: FormGroup
  searchMessage: string = 'Awaiting Input...'

  constructor(private employeesService: EmployeesService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().pipe(take(1)).subscribe((employees) => {
      let preSort = employees.data
      this.employees = preSort.sort((a,b) => b.employee_salary - a.employee_salary)
      this.loadMessage.error = false
    },
    (error) => {
      console.log(error)
      if (error.status === 404) {
        return this.loadMessage = {
          error: true,
          message: `Invalid Endpoint`
        }
      } else if (error.status === 429){
        return this.loadMessage = {
          error: true,
          message: `Too Many Requests for Server, Please Slow Down... (error 429)`
      }
      }else {
        return null
      }
    }
    )

    this.searchForm = this.fb.group({})
    }

// user search function
  runScript(field: any): void {
    if (typeof field === 'number' && field > 0) {
// script to api for single user
      const vowel = '^[aeiouAEIOU].*'
      this.employeesService.getEmployee(field).pipe(take(1)).subscribe(
        (employee) => {
// conditional logic goes here
          if (employee.data.id === field && employee.data.employee_name.match(vowel)) {
// return condition and/or variables that renders the usser or error message
            return this.employee = {name: employee.data.employee_name, found: true}
          } else {
            this.employee.found = false
            return this.searchMessage = `Employee’s name does not begin with a vowel`
          }
        },
        (error) => {
          this.employee.found = false
          if (error.status === 404) {
            return this.searchMessage = `Invalid Employee`
          } else if (error.status === 429){
            console.log(error)
            return this.searchMessage = `Too Many Requests for Server, Please Slow Down... (error 429)`
          }else {
            console.log(error)
            return null
          }
        }
      )} else {
        alert('please input a positive integer')
      }
    }
}

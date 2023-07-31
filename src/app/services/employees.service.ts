import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Root } from '../interface/root';
import { RootSearch } from '../interface/rootSearch'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'https://dummy.restapiexample.com/api/v1/employee'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}s`)
  }

  getEmployee(id: number): Observable<RootSearch> {
    // console.log(`${this.apiUrl2}/${id}`)
    return this.http.get<RootSearch>(`${this.apiUrl}/${id}`)
  }

}

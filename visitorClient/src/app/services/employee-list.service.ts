import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Employee } from "./employee";

@Injectable()
export class EmployeeListService {

  protected http: HttpClient;
  protected url: string = '/api/employee';
  
  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);   
  }

}

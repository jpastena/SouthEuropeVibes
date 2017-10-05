import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs/observable";

import { Dropdown } from "./dropdown";

import { EmployeeListService } from "../../services/employee-list.service";
import { Employee } from "../../services/employee";

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  protected d: Dropdown = new Dropdown();
  protected hours: Array<number>;
  protected minutes: Array<number>;
  protected date: Date;
  protected message: string;
  protected employees: Employee[];
  
  protected employeeListService: EmployeeListService;



  constructor( service: EmployeeListService ) {
   
    this.hours = this.d.hourList; 
    this.minutes = this.d.minuteList;
    // this.date = new Date();
    // this.message = this.message;

    this.employeeListService = service;
    this.employeeListService.fetchEmployees().subscribe((val: Employee[] ) => { this.employees = val });
    

  }

  ngOnInit() {
  }

  book(){
    console.log("BUTTON!!!!");
  }
}


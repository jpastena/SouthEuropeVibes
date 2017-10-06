import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgForm} from '@angular/forms';
import { Observable } from "rxjs/observable";

import { Dropdown } from "./dropdown";

import { EmployeeListService } from "../../services/employee-list.service";
import { Employee } from "../../services/employee";
import { PostVisitService } from "../../services/post-visit.service";
import { Visit } from "../../services/visit";


@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  protected d: Dropdown = new Dropdown();
  protected hours: Array<number>;
  protected minutes: Array<number>;
  protected date: Date = new Date();
  protected message: string;
  protected employees: Employee[];
  
  protected employeeListService: EmployeeListService;
  protected postVisitService: PostVisitService;

  protected guest : string;
  protected selectEmployee : string;
  protected selectHours : number;
  protected selectMinutes : number;
  protected vis ;





  constructor( service: EmployeeListService, servicePost: PostVisitService ) {
   
    this.hours = this.d.hourList; 
    this.minutes = this.d.minuteList;
    this.message = this.message;

    this.employeeListService = service;
    this.employeeListService.fetchEmployees().subscribe((val: Employee[] ) => { this.employees = val });
    
    this.postVisitService = servicePost;

  }

  ngOnInit() {
  }

  notify() {
    
    this.postVisitService.postVisit(this.guest, this.selectEmployee, this.date)
    .subscribe((result)=> { 
      this.vis = result;
      console.log(this.vis)})
    
    console.log(this.guest);
    console.log(this.selectEmployee);
    console.log(this.selectHours + ":" + this.selectMinutes);
    console.log(this.message);
  }

  
}


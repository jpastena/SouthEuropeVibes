import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Visit } from "./visit";

@Injectable()
export class PostVisitService {

  protected http: HttpClient;
  protected url: string = '/api/visit';
 
  
  constructor(http: HttpClient) {
    this.http = http;
  }
  postVisit( guest, employee, date) {
    console.log("Your host is notified! Cheers")
    this.http.post(this.url, {guest, employee, date })
    .subscribe();
  }
}
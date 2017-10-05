import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Visit } from "./visit";

@Injectable()
export class PostVisitService {

  protected http: HttpClient;
  protected url: string = '/api/visit';
  protected body: {
    guest: "TryName",
    employee: "jac@jac.it",
    date: "10 Oct 2019"
  }
  
  constructor(http: HttpClient) {
    this.http = http;
  }
  postVisit() {
    console.log("Your host is notified! Cheers")
    this.http.post(this.url, this.body)
    .subscribe();
  }
}
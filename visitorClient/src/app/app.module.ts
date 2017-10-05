import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisitComponent } from './components/visit/visit.component';
import { AdminComponent } from './components/admin/admin.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { EmployeeListService } from "./services/employee-list.service";
import { PostVisitService } from "./services/post-visit.service";



@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeListService,
    PostVisitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

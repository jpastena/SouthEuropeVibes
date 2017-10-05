import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitComponent } from "./components/visit/visit.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: "visit", component: VisitComponent  },
  { path: "admin", component: AdminComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

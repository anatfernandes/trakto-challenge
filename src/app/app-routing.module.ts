import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/pages/login/login.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CoursewareComponent } from "./components/pages/courseware/courseware.component";
import { CoursewareAllComponent } from "./components/pages/courseware-all/courseware-all.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "dashboard/courseware",
    component: CoursewareComponent,
  },
  {
    path: "dashboard/courseware/all",
    component: CoursewareAllComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

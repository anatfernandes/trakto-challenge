import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessagesComponent } from "./components/messages/messages.component";
import { HeaderComponent } from "./components/header/header.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CoursewareComponent } from "./components/pages/courseware/courseware.component";
import { DesignComponent } from "./components/design/design.component";
import { CoursewareAllComponent } from "./components/pages/courseware-all/courseware-all.component";
import { UnimplementedPageComponent } from "./components/unimplemented-page/unimplemented-page.component";
import { QuizzComponent } from "./components/pages/quizz/quizz.component";
import { DrawingComponent } from "./components/pages/drawing/drawing.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    MessagesComponent,
    HeaderComponent,
    DashboardComponent,
    CoursewareComponent,
    DesignComponent,
    CoursewareAllComponent,
    UnimplementedPageComponent,
    QuizzComponent,
    DrawingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

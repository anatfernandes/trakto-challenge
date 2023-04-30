import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "trakto-challenge";

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  ngOnInit() {
  	if (this.localStorageService.getToken()) {
  		this.router.navigate(["/dashboard"]);
  		return;
  	}
  	
  	this.router.navigate(["/login"]);
  }
}

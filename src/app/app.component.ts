import { Component, OnInit } from "@angular/core";

import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "trakto-challenge";

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {}
}

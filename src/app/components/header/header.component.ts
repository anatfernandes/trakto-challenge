import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { faCalendarDays, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() theme: "dark" | "light" = "light";
  username = this.localStorageService.getFirstname();
  avatarUrl = this.localStorageService.getAvatar();
  calendarIcon = faCalendarDays;
  bellIcon = faBell;
  arrowIcon = faCaretDown;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  getDate() {
    return new Date().toLocaleDateString();
  }
}

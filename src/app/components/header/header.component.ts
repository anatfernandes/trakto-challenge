import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarDays,
  faCaretDown,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() theme: "dark" | "light" = "light";
  @Input() hasChangeEnvironmentButton = false;
  username = this.localStorageService.getFirstname();
  avatarUrl = this.localStorageService.getAvatar();
  calendarIcon = faCalendarDays;
  bellIcon = faBell;
  arrowIcon = faCaretDown;
  returnIcon = faCaretLeft;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  getDate(): string {
    return new Date().toLocaleDateString();
  }

  returnToDashboard(): void {
    this.router.navigate(["/dashboard"]);
  }
}

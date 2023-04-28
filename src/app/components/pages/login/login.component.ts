import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthorizationService } from "src/app/services/authorization/authorization.service";
import { User } from "src/app/interfaces/User";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  handleLogin() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService.createLogin(user).subscribe(() => {
      this.router.navigate(["/dashboard"]);
      this.isLoading = false;
      this.loginForm.reset();
    });
  }
}

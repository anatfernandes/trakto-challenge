import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthorizationService } from "src/app/services/authorization/authorization.service";
import { MessagesService } from "src/app/services/messages/messages.service";
import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";
import { User } from "src/app/interfaces/User";
import { UserEntity } from "src/app/interfaces/UserEntity";
import { Storage } from "src/app/interfaces/Storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthorizationService,
    private messagesService: MessagesService,
    private localStorageService: LocalStorageService
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

    this.authService.createLogin(user).subscribe(
      (response: UserEntity) => {
        const data: Storage = {
          access_token: response.access_token,
          refresh_token: response.refresh_token,
          avatar: response.avatar?.url || "assets/user-default-avatar.png",
          firstname: response.firstname,
          lastname: response.lastname,
        };

        this.localStorageService.set(data);
        this.router.navigate(["/dashboard"]);
        this.messagesService.create("Login realizado com sucesso!", "success");
        this.isLoading = false;
        this.loginForm.reset();
      },
      (error) => {
        this.messagesService.create(error.error.message, "error");
        this.isLoading = false;
      }
    );
  }
}

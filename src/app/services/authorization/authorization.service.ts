import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "src/app/interfaces/User";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthorizationService {
  private API_BASE_URL = environment.API_BASE_URL;
  private API_URL = `${this.API_BASE_URL}auth/signin`;

  constructor(private http: HttpClient) {}

  public createLogin(body: User): Observable<any> {
    return this.http.post(this.API_URL, body);
  }
}

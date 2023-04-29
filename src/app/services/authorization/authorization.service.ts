import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { User } from "src/app/interfaces/User";

@Injectable({
  providedIn: "root",
})
export class AuthorizationService {
  private API_BASE_URL = environment.API_BASE_URL;
  private API_URL = `${this.API_BASE_URL}auth/signin`;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse, callback: Function) {
    callback();
    return throwError(() => new Error(error.message));
  }

  public createLogin(body: User, callback: Function): Observable<any> {
    return this.http
      .post(this.API_URL, body)
      .pipe(catchError((error) => this.handleError(error, callback)));
  }
}

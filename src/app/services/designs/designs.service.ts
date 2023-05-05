import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class DesignsService {
  private API_BASE_URL = environment.API_BASE_URL;
  private API_URL = `${this.API_BASE_URL}document/`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  public listAll(nextCursor: string): Observable<any> {
    const params = new HttpParams()
      .set("total_per_page", 10)
      .set("order_by", "updated_at")
      .set("order_orientation", "desc")
      .set("nextCursor", nextCursor);

    const headers = this.getHeaders();

    const options = { params, headers };

    return this.http.get(this.API_URL, options);
  }

  private getHeaders() {
    const token = this.localStorageService.getToken();

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}

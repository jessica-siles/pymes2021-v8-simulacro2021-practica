import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
@Injectable({ providedIn: "root" })
export class EmpresasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl =
      "https://pav2.azurewebsites.net/api/empresas";
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
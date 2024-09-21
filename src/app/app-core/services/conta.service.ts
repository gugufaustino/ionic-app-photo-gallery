import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";


import { BaseService } from "./base.service";
import { Login } from "../models/login";

@Injectable()
export class ContaService extends BaseService {

  private apiUrl = this.UrlApiApplication + "/api/";
    constructor(private http: HttpClient) { super(); }

    login(login: Login): Observable<Login> {
        let response = this.http.post(this.apiUrl + 'login', login, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
        return response;
    }

}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from "./base.service";


@Injectable()
export class InspecoesService<TEntity> extends BaseService {

  private apiUrl = this.UrlApiApplication + "/api/inspecoes";
    constructor(private http: HttpClient) { super(); }

    public list(): Observable<TEntity[]> {

      // const options = { headers: this.ObterHeaderAuthJson().headers }   /*params : new HttpParams().set('nome', modelo.nome )*/
      // return this.http
      //   .get<TEntity[]>(this.UrlApiApplication + "listar"   , options)
      //   .pipe(catchError(this.serviceError));



      return of(this.itemList as unknown as TEntity[])


    }

    private itemList = [
      { id: '1', type: 'joao@example.com', date: '2020/01/01', completed: true },
      { id: '2', type: 'maria@example.com', date: '2020/01/01', completed: false },
      { id: '3', type: 'carlos@example.com', date: '2020/01/01', completed: false }
    ];

}

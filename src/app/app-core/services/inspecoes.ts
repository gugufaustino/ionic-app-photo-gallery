import { InspecoesModel } from './../models/inspecoes.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from "./base.service";
import { FirestoreService } from "./firestore.service";


@Injectable()
export class InspecoesService<InspecoesModel> extends BaseService {

  private apiUrl = this.UrlApiApplication + "/api/inspecoes";
  constructor(
    private fstore: FirestoreService
  ) { super(); }

  public list(): Observable<InspecoesModel[]> {
    return this.fstore.getCollection<InspecoesModel>('inspecoes');
  }

}

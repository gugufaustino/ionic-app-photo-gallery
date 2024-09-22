import { AuthService } from './../app-core/services/auth.service';
import { Observable } from 'rxjs';
import { InspecoesModel } from '../app-core/models/inspecoes.model';
import { InspecoesService } from './../app-core/services/inspecoes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  constructor(
    private inspecoesservice: InspecoesService<InspecoesModel>,
    private auutservice: AuthService
  ) {

    this.NomeUsuario = this.auutservice.getCurrentUser()?.email || '';

  }

  NomeUsuario: string;

  itemList$: Observable<InspecoesModel[]> = new Observable<InspecoesModel[]>();

  ionViewDidEnter() {
    this.itemList$ = this.inspecoesservice.list();
    this.NomeUsuario = this.auutservice.getCurrentUser()?.email || '';
  }
}

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

  constructor(private inspecoesservice: InspecoesService<InspecoesModel>) {}

  NomeUsuario = 'João';
  NomeSeguradora = 'Liberty Seguros';
  itemList$: Observable<InspecoesModel[]>  = new Observable<InspecoesModel[]>();

  ionViewDidEnter() {
    this.itemList$ = this.inspecoesservice.list();
  }
}

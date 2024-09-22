import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  constructor() {}
  NomeUsuario = 'João';
  NomeSeguradora = 'Liberty Seguros';
  itemList = [
    { id: '1', type: 'joao@example.com', date: '2020/01/01', completed: true },
    { id: '2', type: 'maria@example.com' ,  date: '2020/01/01', completed: true},
    { id: '3', type: 'carlos@example.com',  date: '2020/01/01' , completed: false}
  ];

}

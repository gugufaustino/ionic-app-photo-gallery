import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPage } from './list.page';
import { InspecoesService } from '../app-core/services/inspecoes.service';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [InspecoesService]
})
export class ListRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('../list/tab-list.module').then(m => m.TabListModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../edit/tab-edit.module').then(m => m.TabEditModule)
      },
      {
        path: '',
        redirectTo: '/inspection/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inspection/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

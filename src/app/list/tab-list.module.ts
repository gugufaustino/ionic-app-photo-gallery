import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';
import { ExploreContainerComponentModule } from '../component/explore-container/explore-container.module';

import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListRoutingModule
  ],
  declarations: [ListPage]
})
export class TabListModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPage as PageEdit } from './edit.page';
import { ExploreContainerComponentModule } from '../component/explore-container/explore-container.module';

import { EditRoutingModule } from './edit-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EditRoutingModule
  ],
  declarations: [PageEdit]
})
export class TabEditModule {}

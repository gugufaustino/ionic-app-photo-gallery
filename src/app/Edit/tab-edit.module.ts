import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from '../component/explore-container/explore-container.module';
import { EditRoutingModule } from './edit-routing.module';
import { EditPage } from './edit.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EditRoutingModule
  ],
  declarations: [EditPage]
})
export class TabEditModule {}

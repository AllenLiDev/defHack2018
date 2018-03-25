import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompostPage } from './compost';

@NgModule({
  declarations: [
    CompostPage,
  ],
  imports: [
    IonicPageModule.forChild(CompostPage),
  ],
})
export class CompostPageModule {}

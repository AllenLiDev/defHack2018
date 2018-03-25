import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CompostPage } from '../compost/compost';
import { RecyclePage } from '../recycle/recycle';
import { WastePage } from '../waste/waste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageArray = [RecyclePage, CompostPage, WastePage];
  constructor(public navCtrl: NavController) {

  }

  navigateToOtherPage(pageNumber: number): void {
    this.navCtrl.push(this.pageArray[pageNumber]);
 }

}

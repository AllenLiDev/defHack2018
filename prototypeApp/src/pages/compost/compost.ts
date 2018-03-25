import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the CompostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compost',
  templateUrl: 'compost.html',
})
export class CompostPage {

  @ViewChild('lineCanvas') lineCanvas;
  period: string = 'daily';
  lineChart: any;
  labelsArray = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]];
  maxCount = [7, 31, 12];
  dataArray;
  dataArray2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompostPage');
    this.loadChart(0);
  }

  // 0:day, 1:week, 2:month
  loadChart(set:number){
    console.log(set);
    this.dataArray = [];
    for(let i = 0; i < this.maxCount[set] ; i++){
      if(set == 2){
        this.dataArray.push(Math.floor(Math.random() * 5 * 30))
      } else {
        this.dataArray.push(Math.floor(Math.random() * 5));
      }
    }

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
          labels: this.labelsArray[set],
          datasets: [
              {
                  label: 'You',
                  backgroundColor: 'rgba(205, 133, 6, 1)',
                  borderColor: 'rgba(205, 133, 6, 1)',
                  data: this.dataArray,
                  fill: false
              }
          ],
          options: {
            maintainAspectRatio: false,
            title: {
              display: false
            }
          }
        }
      })
    }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meals',
  templateUrl: './meals.html'
})
export class MealsPage {
  constructor(public navCtrl: NavController) {

  }

  goBack() {
    this.navCtrl.pop();
  }
}

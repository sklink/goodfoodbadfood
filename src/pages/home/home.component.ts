import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MealsPage } from '../meals/meals.component';
import { GroceriesPage } from '../groceries/groceries.component';

@Component({
  selector: 'page-home',
  templateUrl: './home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToGroceriesPage() {
    this.navCtrl.push(GroceriesPage);
  }

  navigateToMealsPage() {
    this.navCtrl.push(MealsPage);
  }
}

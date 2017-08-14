import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meals',
  templateUrl: './meals.html'
})
export class MealsPage {
  searchQuery: string = '';
  meals: string[] = ['Chicken Alfredo', 'Spaghetti with Meatballs', 'Breakfast Skillet', 'Chicken Skewers', 'Chili Con Carne'];
  searchHasFocus: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  getMeals(event: any) {
    console.log(this.searchQuery, event);

    this.searchHasFocus = true;

    // TODO: Use ReduxSagas to request a new set of meals...
  }

  goBack() {
    this.navCtrl.pop();
  }
}

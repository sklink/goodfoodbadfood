import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { List, Map } from 'immutable';

import { MealsPage } from '../meals/meals.component';
import { GroceriesPage } from '../groceries/groceries.component';

import { GROUP_TYPE_HASH, RESTRICTION_TYPE_HASH } from './home.constants';
import { HomeActions } from './home.actions';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  @select(['home', 'avgGrade']) readonly avgGrade$: Observable<string>;
  @select(['home', 'filters', 'restrictions']) readonly restrictions$: Observable<List<string>>;
  @select(['home', 'filters', 'types']) readonly types$: Observable<List<string>>;
  @select(['home', 'filters', 'sortBy']) readonly sortBy$: Observable<string>;
  @select(['home', 'filters', 'groupBy']) readonly groupBy$: Observable<string>;
  @select(['home', 'filteredItems']) readonly items$: Observable<Map<string, any>>;

  constructor(public navCtrl: NavController, private actions: HomeActions) { }

  toggleItemReviewInclusion(group: string, itemIndex: number, item: Map<string, any>) {
    this.actions.toggleItemReviewInclusion(group, itemIndex, item);
  }

  // Filters
  setFilterRestrictions(restrictions: string[]) {
    this.actions.setRestrictionFilters(restrictions);
  }

  setTypeFilters(types: string[]) {
    this.actions.setTypeFilters(types);
  }

  setGroupBy(groupType: string) {
    this.actions.groupBy(groupType);
  }

  setSortBy(sortType: string) {
    this.actions.sortBy(sortType);
  }

  // Page navigation
  navigateToGroceriesPage() {
    this.navCtrl.push(GroceriesPage);
  }

  navigateToMealsPage() {
    this.navCtrl.push(MealsPage);
  }

  groupShouldRender(currGroup: string, groupBy: string, restrictions: List<string>, types: List<string>) {
    let shouldRender;

    // NOTE: Could be strung into a single return but I opted for readability...
    switch(groupBy) {
      case GROUP_TYPE_HASH.RESTRICTION:
        shouldRender = currGroup === RESTRICTION_TYPE_HASH.NONE || restrictions.includes(currGroup);
        break;
      case GROUP_TYPE_HASH.TYPE:
        shouldRender = types.includes(currGroup);
        break;
    }

    return shouldRender;
  }

  // List optimizations
  trackByName(index: number, item: Map<string, any>) {
    // TODO: When we hook up to a database, this should be _id so we can handle duplicate names.
    return item.get('name');
  }
}

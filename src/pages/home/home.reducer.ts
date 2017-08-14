import _ from 'lodash';
import { Action } from 'redux';
import { fromJS, List } from 'immutable';

import { SORT_TYPE_LIST, GROUP_TYPE_LIST } from './home.constants';
import { INITIAL_STATE_DATA } from './home.initial-state';
import { HomeActions, HomeAction } from './home.actions';
import {
  sortItems,
  groupItems,
  gradeItems,
  getAvgRating,
  ratingToGrade,
  initializeState
} from './home.services';

// Initial state, provided by Immutable.js
// FIXME: fromJS has no type checking... we need to write our own
export let INITIAL_STATE: any = fromJS(INITIAL_STATE_DATA);

// Home reducer generator
export function createHomeReducer() {
  // Items need to be graded, grouped, and sorted before initialized...
  INITIAL_STATE = initializeState(INITIAL_STATE);

  return function settingsReducer(state: any = INITIAL_STATE, a: Action) {
    const action: HomeAction = a as HomeAction;
    let currItemList = state.get('filteredItems');
    let sortBy: string;
    let groupBy: string;
    let avgRating: number;
    let avgGrade: string;

    switch (action.type) {
      case HomeActions.TOGGLE_ITEM_REVIEW_INCLUSION:
        console.log("IN HOME");
        const group: string = action.payload.group;
        const itemIndex: number = action.payload.itemIndex;
        let item: Map<string, any> = action.payload.item;

        item = item.set('inactive', !item.get('inactive'));
        currItemList = currItemList.setIn([group, itemIndex], item);

        avgRating = getAvgRating(currItemList);
        avgGrade = ratingToGrade(avgRating);
        console.log(item, group, itemIndex);

        state = state.set('avgRating', avgRating);
        state = state.set('avgGrade', avgGrade);
        state = state.set('filteredItems', currItemList);
        break;

      case HomeActions.SET_TYPE_FILTERS:
        const types: List<string> = List(action.payload.types);

        currItemList = currItemList.map((group) => {
          return group.map((item) => {
            return item.set('hidden', !types.includes(item.get('type')));
          });
        });

        // Recalculate grade now that some items may be excluded
        avgRating = getAvgRating(currItemList);
        avgGrade = ratingToGrade(avgRating);

        state = state.set('avgRating', avgRating);
        state = state.set('avgGrade', avgGrade);
        state = state.set('filteredItems', currItemList);
        state = state.setIn(['filters', 'types'], types);
        break;

      case HomeActions.SET_RESTRICTION_FILTERS:
        const restrictions: List<string> = List(action.payload.restrictions);
        sortBy = state.getIn(['filters', 'sortBy']);

        // Grade all of the items based on new restrictions...
        currItemList = gradeItems(currItemList, restrictions);
        currItemList = sortItems(sortBy, currItemList)

        // Recalculate overall grade...
        avgRating = getAvgRating(currItemList);
        avgGrade = ratingToGrade(avgRating);

        state = state.set('avgRating', avgRating);
        state = state.set('avgGrade', avgGrade);
        state = state.set('filteredItems', currItemList);
        state = state.setIn(['filters', 'restrictions'], restrictions);
        break;

      case HomeActions.SORT_BY:
        sortBy = action.payload.sortType;

        if (!_.includes(SORT_TYPE_LIST, sortBy)) {
          // TODO: External error reporting so we catch issues that get released.
          console.error(`Sort type "${sortBy}" has not been set up.`);
        } else if (state.getIn(['filters', 'sortBy']) !== sortBy) {
          currItemList = sortItems(sortBy, currItemList);

          // Update the state...
          state = state.set('filteredItems', currItemList);
          state = state.setIn(['filters', 'sortBy'], sortBy);
        }
        break;

      case HomeActions.GROUP_BY:
        groupBy = action.payload.groupType;
        sortBy = state.getIn(['filters', 'sortBy']);

        if (!_.includes(GROUP_TYPE_LIST, groupBy) || !_.includes(SORT_TYPE_LIST, sortBy)) {
          // TODO: External error reporting so we catch issues that get released.
          console.error(`Group type "${groupBy}" or sort type ${groupBy} has not been set up.`);
        } else if (state.getIn(['filters', 'groupBy']) !== groupBy) {
          currItemList = groupItems(groupBy, currItemList);
          currItemList = sortItems(sortBy, currItemList);

          // Update the state...
          state = state.set('filteredItems', currItemList);
          state = state.setIn(['filters', 'groupBy'], groupBy);
        }
        break;
      default:
        // Do nothing...
    }

    return state;
  };
}

import _ from 'lodash';
import { fromJS, List, Map, Iterable } from 'immutable';

import {
  GRADES,
  SORT_TYPE_HASH,
  GROUP_TYPE_HASH,
  RESTRICTION_TYPE_HASH, RESTRICTION_TYPE_LIST
} from './home.constants';
import { IGrade } from './home.models';

const emptyList: List<string> = List([]);

/*
 * Sort Methods
 */
const sortByGrade = (item: Map<string, any>) => item.get('grade');
const sortByName = (item: Map<string, any>) => item.get('name');

export const sortItems = (sortBy: string, items: Iterable<number, Iterable<string, any>>) => {
  let sortMethod;

  // Get sort method...
  switch(sortBy) {
    case SORT_TYPE_HASH.NAME:
      sortMethod = sortByName;
      break;
    case SORT_TYPE_HASH.GRADE:
      sortMethod = sortByGrade;
      break;
  }

  // Sort the groups...
  items = items.map((group) => {
    return group.sortBy(sortMethod);
  });

  return items;
};

/*
 * Group Methods
 */
const groupByType = (item: Map<string, any>) => item.get('type');

/*
 * TODO: This method needs work.
 * Current: Places items within the first restriction it finds.
 * Desired: Place items under all of the
 *
 * Hurdles:
 * - Duplicate items need to check and uncheck together, Immutable makes
 * referencing the same object in two places more difficult. Have to reference by
 * name; _id when we pull from a database.
 * - Duplicate items under the same category should not exist. Easy fix, just
 * verify that the item isn't already in--Immutable helps with this but watch
 * overhead.
 */
const groupByRestriction = (items: Iterable<number, Iterable<string, any>>): any => {
  const result = {};

  // Setup the restriction groups...
  _.each(RESTRICTION_TYPE_LIST, (restriction) => {
    result[restriction] = [];
  });
  result[RESTRICTION_TYPE_HASH.NONE] = [];

  // Iterate and group the items...
  items.forEach((item) => {
    const itemRestrictions = item.get('restrictions');

    if (itemRestrictions) {
      itemRestrictions.forEach((value: number, key: string) => {
        result[key].push(item);

        // FIXME: Only adding to the first restriction group to avoid duplicates.
        return false;
      });
    } else {
      result[RESTRICTION_TYPE_HASH.NONE].push(item);
    }
  });

  return fromJS(result);
};

// TODO: Type for items... Need to do more reading on Immutable.js typings
export const groupItems = (groupBy: string, items) => {
  // Flatten the groups so we can regroup...
  items = items.reduce((reduction, value, key) => {
    return reduction.concat(value);
  }, emptyList);

  // Create the new groupings...
  switch(groupBy) {
    case GROUP_TYPE_HASH.RESTRICTION:
      items = groupByRestriction(items);
      break;
    case GROUP_TYPE_HASH.TYPE:
      items = items.groupBy(groupByType);
      break;
  }

  return items;
};

/*
 * Rating & Grading Methods
 */
const setItemGrade = (filterRestrictions: List<string>, item: Map<string, any>) => {
  let itemRestrictions: Map<string, number> = item.get('restrictions');
  let avg: number = 5;

  if (itemRestrictions) {
    avg = itemRestrictions.reduce((avg: number, value: number, key: string) => {
      if (filterRestrictions.includes(key)) {
        avg -= value;
      }

      return avg;
    }, 5);
  }

  avg = avg < 0 ? 0 : avg;

  item = item.set('rating', avg);
  item = item.set('grade', ratingToGrade(avg));

  return item;
};

export const gradeItems = (items: Iterable<number, Iterable<string, any>>, restrictions: List<string>) => {
  items = items.map((group) => {
    return group.map((item) => setItemGrade(restrictions, item));
  });

  return items;
}

// TODO: Type for items... Need to do more reading on Immutable.js typings
export const getAvgRating = (items) => {
  let totalRating: number = 0;
  let count: number = 0;

  items.forEach((group) => {
    group.forEach((item) => {
      if (!item.get('hidden') && !item.get('inactive')) {
        totalRating += item.get('rating');
        count += 1;
      }
    });
  });

  return count > 0 ? totalRating / count : 0;
};

export const ratingToGrade = (rating: number) => {
  let grade: IGrade = GRADES.F;

  if (rating > 4.5) {
    grade = GRADES.A_PLUS;
  } else if (rating > 4) {
    grade = GRADES.A;
  } else if (rating > 3.5) {
    grade = GRADES.B_PLUS;
  } else if (rating > 3) {
    grade = GRADES.B;
  } else if (rating > 2.5) {
    grade = GRADES.C_PLUS;
  } else if (rating > 2) {
    grade = GRADES.C;
  } else if (rating > 1.5) {
    grade = GRADES.D_PLUS;
  } else if (rating > 1) {
    grade = GRADES.D;
  } else if (rating >= 0) {
    grade = GRADES.F;
  }

  return fromJS(grade);
}

// State initialization
export const initializeState = (state: any) => {
  // TODO: Type for items... Need to do more reading on Immutable.js typings
  let items = state.get('items');
  let filterRestrictions: List<string> = state.getIn(['filters', 'restrictions']);
  let sortBy: string = state.getIn(['filters', 'sortBy']);
  let groupBy: string = state.getIn(['filters', 'groupBy']);

  items = groupItems(groupBy, items);
  items = gradeItems(items, filterRestrictions);
  items = sortItems(sortBy, items);

  const avgRating: number = getAvgRating(items);
  const avgGrade: number = ratingToGrade(avgRating);

  state = state.set('avgRating', avgRating);
  state = state.set('avgGrade', avgGrade);
  state = state.set('filteredItems', items);

  return state;
};

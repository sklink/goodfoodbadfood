import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

// We don't send anything through to these actions, so null the payload and meta
type Payload = {
  sortType?: string,
  groupType?: string,
  restrictions?: string[],
  types?: string[],
  item?: any,
  group?: string,
  itemIndex?: number
};
type Meta = null;
export type HomeAction = FluxStandardAction<Payload, Meta>;

@Injectable()
export class HomeActions {
  static readonly TOGGLE_ITEM_REVIEW_INCLUSION = 'TOGGLE_ITEM_REVIEW_INCLUSION';

  @dispatch()
  toggleItemReviewInclusion = (group: string, itemIndex: number, item: any): HomeAction => ({
    type: HomeActions.TOGGLE_ITEM_REVIEW_INCLUSION,
    payload: { group, itemIndex, item },
    meta: null
  });

  static readonly SET_TYPE_FILTERS = 'SET_TYPE_FILTERS';

  @dispatch()
  setTypeFilters = (types: string[]): HomeAction => ({
    type: HomeActions.SET_TYPE_FILTERS,
    payload: { types },
    meta: null
  });

  static readonly SET_RESTRICTION_FILTERS = 'SET_RESTRICTION_FILTERS';

  @dispatch()
  setRestrictionFilters = (restrictions: string[]): HomeAction => ({
    type: HomeActions.SET_RESTRICTION_FILTERS,
    payload: { restrictions },
    meta: null
  });

  static readonly GROUP_BY = 'GROUP_BY';

  @dispatch()
  groupBy = (groupType: string): HomeAction => ({
    type: HomeActions.GROUP_BY,
    payload: { groupType },
    meta: null
  });

  static readonly SORT_BY = 'SORT_BY';

  @dispatch()
  sortBy = (sortType: string): HomeAction => ({
    type: HomeActions.SORT_BY,
    payload: { sortType },
    meta: null
  });
}

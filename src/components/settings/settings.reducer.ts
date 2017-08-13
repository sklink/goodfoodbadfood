import { Action } from 'redux';
import { fromJS } from 'immutable';

// Models
import { ISettings } from './settings.model';

// Actions
import { SettingsActions, SettingsAction } from './settings.actions';

// Initial state, provided by Immutable.js
const INITIAL_STATE_DATA: ISettings = {
  sendEmail: { isEnabled: false },
  sendSMS: { isEnabled: false },
  sendPushNotifications: { isEnabled: true }
};

// FIXME: fromJS has no type checking... we need to write our own
export const INITIAL_STATE: any = fromJS(INITIAL_STATE_DATA);

// Map actions to state parameters to consolidate repeat action types
const actionStateMap = {};
actionStateMap[SettingsActions.TOGGLE_EMAIL] = 'sendEmail';
actionStateMap[SettingsActions.TOGGLE_SMS] = 'sendSMS';
actionStateMap[SettingsActions.TOGGLE_PUSH_NOTIFICATIONS] = 'sendPushNotifications';

// Settings reducer generator
export function createSettingsReducer() {
  return function settingsReducer(state: any = INITIAL_STATE, a: Action) {
    const action = a as SettingsAction;
    let result: any = state;

    switch (action.type) {
      case SettingsActions.TOGGLE_EMAIL:
      case SettingsActions.TOGGLE_SMS:
      case SettingsActions.TOGGLE_PUSH_NOTIFICATIONS:
        // Get the attribute path
        const statePath: string = actionStateMap[action.type];

        // Toggle any of the above boolean values
        result = state.updateIn([statePath, 'isEnabled'], isEnabled => !isEnabled);
        break;
      case SettingsActions.SAVE_EMAIL:
        // TODO: Save this data our Graphcool server
        result = state.updateIn(['sendEmail', 'email'], email => action.payload.email);
        break;
      case SettingsActions.SAVE_PHONE:
        // TODO: Save this data our Graphcool server
        result = state.updateIn(['sendSMS', 'phone'], phone => action.payload.phone);
        break;
      default:
        // Do nothing...
    }

    return result;
  };
}

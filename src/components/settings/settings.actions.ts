import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = {
  email?: string,
  phone?: string
};
type Meta = null;

export type SettingsAction = FluxStandardAction<Payload, Meta>;

@Injectable()
export class SettingsActions {
  // Email Actions
  static readonly TOGGLE_EMAIL = 'TOGGLE_EMAIL';

  @dispatch()
  toggleEmailCommunication = (): SettingsAction => ({
    type: SettingsActions.TOGGLE_EMAIL,
    payload: null,
    meta: null
  })

  static readonly SAVE_EMAIL = 'SAVE_EMAIL';

  @dispatch()
  saveEmail = (email: string): SettingsAction => ({
    type: SettingsActions.SAVE_EMAIL,
    payload: { email },
    meta: null
  });

  // Push Actions
  static readonly TOGGLE_PUSH_NOTIFICATIONS = 'TOGGLE_PUSH_NOTIFICATIONS';

  @dispatch()
  togglePushCommunication = (): SettingsAction => ({
    type: SettingsActions.TOGGLE_PUSH_NOTIFICATIONS,
    payload: null,
    meta: null
  })

  // SMS Actions
  static readonly TOGGLE_SMS = 'TOGGLE_SMS';

  @dispatch()
  toggleSmsCommunication = (): SettingsAction => ({
    type: SettingsActions.TOGGLE_SMS,
    payload: null,
    meta: null
  })

  static readonly SAVE_PHONE = 'SAVE_PHONE';

  @dispatch()
  savePhone = (phone: string): SettingsAction => ({
    type: SettingsActions.SAVE_PHONE,
    payload: { phone },
    meta: null
  });
}

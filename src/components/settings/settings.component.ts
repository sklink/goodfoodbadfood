import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

// Constants
import { DEBOUNCE_DURATION } from '../../app/constants';

// Actions
import { SettingsActions } from './settings.actions';

// Animations
const hidingTransition = transition('visible => hidden', animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)'));
const showingTransition = transition('hidden => visible', animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)'));

@Component({
  selector: 'settings-menu',
  templateUrl: './settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleField', [
      state('hidden', style({ height: '0px', borderBottom: 'none' })),
      state('visible', style({ height: '67px' })),
      hidingTransition,
      showingTransition
    ]),
    trigger('toggleSaveMessage', [
      state('hidden', style({ height: '0px', display: 'none' })),
      state('visible', style({ height: '33px' })),
      hidingTransition,
      showingTransition
    ])
  ]
})
export class SettingsMenu {
  @select(['settings', 'sendEmail', 'isEnabled']) readonly sendEmailEnabled$: Observable<boolean>;
  @select(['settings', 'sendEmail', 'email']) readonly email$: Observable<boolean>;

  @select(['settings', 'sendSMS', 'isEnabled']) readonly sendSMSEnabled$: Observable<boolean>;
  @select(['settings', 'sendSMS', 'phone']) readonly phone$: Observable<boolean>;

  @select(['settings', 'sendPushNotifications', 'isEnabled']) readonly sendPushNotificationsEnabled$: Observable<boolean>;

  constructor(private actions: SettingsActions) { }

  /* NOTE: I had considered consolidating these into generic communication methods
   * to keep with DRY but felt that with the simplicity of the app it made
   * more sense make each communication method stand out. */

  /*
   * Handle SMS settings
   */
  toggleSMS() {
    this.actions.toggleSmsCommunication();
  }

  phoneDebounce: any;
  updatePhone(event) {
    const phone = event.value;

    clearTimeout(this.phoneDebounce);
    this.phoneDebounce = setTimeout(() => {
      this.actions.savePhone(phone);
    }, DEBOUNCE_DURATION);
  }

  /*
   * Handle push settings
   */
  togglePush() {
    this.actions.togglePushCommunication();
  }

  /*
   * Handle email settings
   */
  toggleEmail() {
    this.actions.toggleEmailCommunication();
  }

  emailDebounce: any;
  updateEmail(event) {
    const email = event.value;

    clearTimeout(this.emailDebounce);
    this.emailDebounce = setTimeout(() => {
      this.actions.saveEmail(email);
    }, DEBOUNCE_DURATION);
  }
}

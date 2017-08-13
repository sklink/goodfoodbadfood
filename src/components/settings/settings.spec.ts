import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestUtils } from '../../test';
import { SettingsMenu } from './settings.component';
import { SettingsActions } from './settings.actions';

describe('Components: SettingsMenu', () => {
  let fixture: ComponentFixture<SettingsMenu>;
  let instance: any;
  let mockNgRedux: NgRedux<any>;
  let devTools: DevToolsExtension;

  beforeEach(async(() => TestUtils.beforeEachCompiler([SettingsMenu], [SettingsActions]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    mockNgRedux = compiled.mockNgRedux;
    devTools = compiled.devTools;
    fixture.autoDetectChanges(true);
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('initialises', () => {
    expect(fixture).not.toBeNull();
    expect(instance).not.toBeNull();
  });

  it('should create the settings menu component', async(() => {
    expect(instance).toBeTruthy();
  }));

  // Action Tests
  // it('dispatches TOGGLE_EMAIL when email toggle is pressed', () => {
  //   const spy = spyOn(mockNgRedux, 'dispatch');
  //
  //   // Perform your expectations
  //   expect(spy).toHaveBeenCalledWith({type: SettingsActions.TOGGLE_EMAIL });
  // });

  // it('dispatches SAVE_EMAIL when push notification toggle is pressed', () => {
  //   const spy = spyOn(mockNgRedux, 'dispatch');
  //
  //
  //   expect(spy).toHaveBeenCalledWith({type: SettingsActions.SAVE_EMAIL });
  // });
  //
  // it('dispatches TOGGLE_PUSH_NOTIFICATIONS when push notification toggle is pressed', () => {
  //   const spy = spyOn(mockNgRedux, 'dispatch');
  //
  //   expect(spy).toHaveBeenCalledWith({type: SettingsActions.TOGGLE_PUSH_NOTIFICATIONS });
  // });
  //
  // it('dispatches TOGGLE_SMS when push notification toggle is pressed', () => {
  //   const spy = spyOn(mockNgRedux, 'dispatch');
  //
  //   expect(spy).toHaveBeenCalledWith({type: SettingsActions.TOGGLE_SMS });
  // });
  //
  // it('dispatches SAVE_PHONE when push notification toggle is pressed', () => {
  //   const spy = spyOn(mockNgRedux, 'dispatch');
  //
  //   expect(spy).toHaveBeenCalledWith({type: SettingsActions.SAVE_PHONE });
  // });
});

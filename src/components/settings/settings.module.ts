import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Global Modules
import { StoreModule } from '../../app/store/store.module';
import { SharedModule } from '../../app/shared/shared.module';

// Local
import { SettingsMenu } from './settings.component';
import { SettingsActions } from './settings.actions';

@NgModule({
  declarations: [ SettingsMenu ],
  exports: [ SettingsMenu ],
  imports: [ StoreModule, SharedModule ],
  providers: [ SettingsActions ]
})
export class SettingsModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Global Modules
import { StoreModule } from '../../app/store/store.module';
import { SharedModule } from '../../app/shared/shared.module';

// Local
import { HomePage } from './home.component';

@NgModule({
  declarations: [ HomePage ],
  imports: [
    StoreModule,
    SharedModule,
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [ HomePage ]
})
export class HomePageModule { }

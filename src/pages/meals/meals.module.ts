import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Global Modules
import { StoreModule } from '../../app/store/store.module';
import { SharedModule } from '../../app/shared/shared.module';

// Local
import { MealsPage } from './meals.component';

@NgModule({
  declarations: [ MealsPage ],
  imports: [
    StoreModule,
    SharedModule,
    IonicPageModule.forChild(MealsPage)
  ],
  entryComponents: [ MealsPage ]
})
export class MealsPageModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Global Modules
import { StoreModule } from '../../app/store/store.module';
import { SharedModule } from '../../app/shared/shared.module';

// Local
import { GroceriesPage } from './groceries.component';

@NgModule({
  declarations: [ GroceriesPage ],
  imports: [
    StoreModule,
    SharedModule,
    IonicPageModule.forChild(GroceriesPage)
  ],
  entryComponents: [ GroceriesPage ]
})
export class GroceriesPageModule { }

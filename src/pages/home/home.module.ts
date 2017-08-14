import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Global Modules
import { StoreModule } from '../../app/store/store.module';
import { SharedModule } from '../../app/shared/shared.module';

// Local
import { HomePage } from './home.component';
import { HomeActions } from './home.actions';
import { FoodListItem } from '../../components/food-list-item/food-list-item.component';

@NgModule({
  declarations: [ HomePage, FoodListItem ],
  imports: [
    StoreModule,
    SharedModule,
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [ HomePage ],
  providers: [ HomeActions ]
})
export class HomePageModule { }

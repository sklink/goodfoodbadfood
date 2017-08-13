import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Translation (i18n)
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// App Start
import { MyApp } from './app.component';

// Modules
import { StoreModule } from './store/store.module';
import { HomePageModule } from '../pages/home/home.module';
import { GroceriesPageModule } from '../pages/groceries/groceries.module';
import { MealsPageModule } from '../pages/meals/meals.module';
import { SettingsModule } from '../components/settings/settings.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, { mode: 'md' }),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    StoreModule,
    HomePageModule,
    GroceriesPageModule,
    MealsPageModule,
    SettingsModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [ MyApp ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }

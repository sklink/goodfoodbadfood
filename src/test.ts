// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform, GestureController, Haptic } from 'ionic-angular';
import { ConfigMock, PlatformMock } from 'ionic-mocks';

// Redux
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';

// Translation (i18n)
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();

export class TestUtils {

  public static beforeEachCompiler(components: Array<any>, providers?: Array<any>): Promise<{fixture: any, instance: any, mockNgRedux?: NgRedux<any>, devTools?: DevToolsExtension}> {
    return TestUtils.configureIonicTestingModule(components, providers || [])
      .compileComponents().then(() => {
        const testbed = getTestBed();

        let fixture: any;
        let instance: any;
        if (components.length > 0) {
          fixture = TestBed.createComponent(components[0]);
          instance = fixture.debugElement.componentInstance;
        }

        return {
          fixture, instance,
          mockNgRedux: MockNgRedux.getInstance(),
          devTools: testbed.get(DevToolsExtension)
        };
      });
  }

  public static configureIonicTestingModule(components: Array<any>, providers: Array<any>): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
        App, Form, Keyboard, DomController, MenuController, NavController, GestureController, Haptic,
        {provide: Platform, useFactory: () => PlatformMock.instance()},
        {provide: Config, useFactory: () => ConfigMock.instance()},
        TranslateService,
        ...providers
      ],
      imports: [
        HttpModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        }),
        NgReduxTestingModule
      ],
    });
  }

  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}

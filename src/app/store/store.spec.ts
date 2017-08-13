import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { ComponentFixture, TestBed, async, getTestBed } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { StoreModule } from './store.module';

describe('Store Module', () => {
  let mockNgRedux: NgRedux<any>;
  let devTools: DevToolsExtension;

  beforeEach(async(() => TestUtils.beforeEachCompiler([], []).then(compiled => {
    mockNgRedux = compiled.mockNgRedux;
    devTools = compiled.devTools;
  })));

  it('should configure the store when the module is loaded', async(() => {
    const configureSpy = spyOn(MockNgRedux.getInstance(), 'configureStore');
    const instance = new StoreModule(mockNgRedux, devTools);

    expect(configureSpy).toHaveBeenCalled();
  }));
});

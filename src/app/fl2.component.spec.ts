import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Fl2AppComponent } from '../app/fl2.component';

beforeEachProviders(() => [Fl2AppComponent]);

describe('App: Fl2', () => {
  it('should create the app',
      inject([Fl2AppComponent], (app: Fl2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fl2 works!\'',
      inject([Fl2AppComponent], (app: Fl2AppComponent) => {
    expect(app.title).toEqual('fl2 works!');
  }));
});

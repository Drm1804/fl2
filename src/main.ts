import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Fl2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Fl2AppComponent);

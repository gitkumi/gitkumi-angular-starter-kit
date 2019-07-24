import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AuthenticationService,
} from './services';

const services = [
  AuthenticationService
];

const modules = [
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    ...modules
  ],
  providers: [
    ...services
  ]
})
export class CoreModule { }

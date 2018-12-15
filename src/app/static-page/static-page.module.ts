import { NgModule } from '@angular/core';

import { StaticPageRoutingModule } from './static-page-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    StaticPageRoutingModule,
    SharedModule,
  ],
  declarations: []
})
export class StaticPageModule { }

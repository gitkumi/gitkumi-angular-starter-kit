import { NgModule } from '@angular/core';

import { StaticPageRoutingModule } from './static-page-routing.module';

import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    StaticPageRoutingModule,
    SharedModule,
    NgxsModule.forFeature([])
  ],
  declarations: []
})
export class StaticPageModule { }

import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing-routing.module';

import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';

import { LandingComponent } from './landing.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  imports: [
    LandingRoutingModule,
    SharedModule,
    NgxsModule.forFeature([])
  ],
  declarations: [
    LandingComponent,
    HeroSectionComponent
  ]
})
export class LandingModule { }

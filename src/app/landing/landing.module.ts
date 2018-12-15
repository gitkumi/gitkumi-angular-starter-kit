import { NgModule } from '@angular/core';

import { LandingRoutingModule } from './landing-routing.module';

import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { LandingHeroSectionComponent } from './components/landing-hero-section/landing-hero-section.component';

@NgModule({
  imports: [
    LandingRoutingModule,
    SharedModule
  ],
  declarations: [
  LandingComponent,
  LandingHeroSectionComponent]
})
export class LandingModule { }

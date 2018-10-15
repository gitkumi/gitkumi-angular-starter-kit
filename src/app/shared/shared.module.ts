import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryImportModule } from '../library-import/library-import.module';
import { MaterialImportModule } from '../material-import/material-import.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const modules = [
  CommonModule,
  MaterialImportModule,
  LibraryImportModule,
  FormsModule,
  ReactiveFormsModule
];

const components = [
  NavbarComponent,
  FooterComponent
];

@NgModule({
  imports: [
    ...modules,
    NgxsModule.forRoot([
    ]),
    // NgxsRouterPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [
    ...modules,
    ...components
  ],
  declarations: [
    ...components,
  ]
})
export class SharedModule { }

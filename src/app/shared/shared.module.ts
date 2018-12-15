import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryImportModule } from '../library-import/library-import.module';
import { MaterialImportModule } from '../material-import/material-import.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

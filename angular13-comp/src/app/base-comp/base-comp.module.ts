import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCompComponent } from './base-comp.component';
import { RouterModule } from '@angular/router';
import { BASE_ROUTES } from './base-comp.routes';
// Modification: Add CUSTOM_ELEMENTS_SCHEMA to access external components
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BASE_ROUTES)
  ],
  declarations: [
    BaseCompComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Tells Angular we will have custom tags in our templates
})
export class BaseCompModule { }

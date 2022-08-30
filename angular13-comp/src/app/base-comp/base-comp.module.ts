import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCompComponent } from './base-comp.component';
import { RouterModule } from '@angular/router';
import { BASE_ROUTES } from './base-comp.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BASE_ROUTES)
  ],
  declarations: [
    BaseCompComponent
  ]
})
export class BaseCompModule { }

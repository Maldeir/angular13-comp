import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCompComponent } from './base-comp/base-comp.component';

const routes: Routes = [
  { path: '', component: BaseCompComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

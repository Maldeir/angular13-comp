import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseCompModule } from './base-comp/base-comp.module';
import { HeaderCompComponent } from './header-comp/header-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

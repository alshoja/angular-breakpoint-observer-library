import { BreakPointObserverModule } from './../../../break-point-observer/src/lib/break-point-observer.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreakPointObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
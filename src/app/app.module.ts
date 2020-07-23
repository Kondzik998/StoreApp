import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavComponent } from './navbar/nav/nav.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavComponent,
    PropertyListComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

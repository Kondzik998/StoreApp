import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavComponent } from './navbar/nav/nav.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { CarsiService } from './services/carsi.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavComponent,
    PropertyListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CarsiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

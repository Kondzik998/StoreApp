import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavComponent } from './navbar/nav/nav.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { CarsiService } from './services/carsi.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const appRoutes: Routes = [
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'property-details/:id',
    component: PropertyDetailsComponent
  },
  {
    path: 'rent-property',
    component: PropertyDetailsComponent
  },
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: '**',
    component: PropertyListComponent
  }
];

@NgModule({
   declarations: [
      AppComponent,
      PropertyCardComponent,
      NavComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PropertyDetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      CarsiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

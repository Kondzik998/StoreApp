import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavComponent } from './navbar/nav/nav.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { CarsiService } from './services/carsi.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';

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
    component: PropertyListComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'user-register',
    component: UserRegisterComponent
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
      PropertyDetailsComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      TabsModule
   ],
   providers: [
      CarsiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarComponent } from './car/car.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    CarComponent,
    UsersPageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

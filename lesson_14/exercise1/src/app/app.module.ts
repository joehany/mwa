import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    myRoutes // add it to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

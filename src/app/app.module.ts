import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

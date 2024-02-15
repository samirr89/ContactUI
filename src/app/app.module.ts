import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { ContactSystemComponent } from './modules/core/contact-system/contact-system.component';
import { ContactBreadcrumbComponent } from './modules/core/contact-breadcrumb/contact-breadcrumb.component';
import { LoginComponent } from './modules/core/login/login.component';
import { RegisterComponent } from './modules/core/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { MaterialModules } from './models/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactSystemComponent,
    ContactBreadcrumbComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

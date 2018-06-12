import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutesModule } from './app.routes.module';
import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './login/logo/logo.component';
import { CopyrightComponent } from './login/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

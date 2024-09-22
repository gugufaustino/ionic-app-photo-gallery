import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastAppService } from './app-core/services/toastapp.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './app-core/services/auth.service';
import { CommonModule } from '@angular/common';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
     BrowserAnimationsModule, // required animations module

    IonicModule.forRoot(),
    AppRoutingModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({ // ToastrModule added
      positionClass: 'toast-center-center',
      enableHtml : true,
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ToastAppService,
    AuthService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

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
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FirestoreService } from './app-core/services/firestore.service';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
      enableHtml: true,
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ToastAppService,
    AuthService,
    FirestoreService,
    provideHttpClient(withInterceptorsFromDi()),
    provideFirebaseApp(() => initializeApp({ "projectId": "inspecoes-app-mobile", "appId": "1:278534006784:web:614123236b56b65e9610e5", "storageBucket": "inspecoes-app-mobile.appspot.com", "apiKey": "AIzaSyDuQ5JSJd8CNZcygFtsDsIn1Yq6tlz0aPc", "authDomain": "inspecoes-app-mobile.firebaseapp.com", "messagingSenderId": "278534006784", "measurementId": "G-GBEJDWD65E" })),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

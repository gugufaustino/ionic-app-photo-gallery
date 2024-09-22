import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";

import { BaseService } from "./base.service";
import { LoginModel } from "../models/login.model";

import { Auth, EmailAuthProvider, onAuthStateChanged, signInWithCredential, signOut, User, UserCredential } from "@angular/fire/auth";

@Injectable()
export class AuthService extends BaseService {

  private apiUrl = this.UrlApiApplication + "/api/";
  constructor(private http: HttpClient,
    private auth: Auth,

  ) { super(); }


    login(login: LoginModel): Observable<UserCredential>{
      const authCredential = EmailAuthProvider.credential(login.email, login.password);
      return from(signInWithCredential(this.auth, authCredential));
  }


  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  getAuthState(): Observable<User | null> {
    return new Observable((subscriber) => {
      onAuthStateChanged(this.auth, (user) => {
        subscriber.next(user);
      });
    });
  }

  getCurrentUser()  {
    return this.auth.currentUser;
  }

}

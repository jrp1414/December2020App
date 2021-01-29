import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { Auth, authAction } from '../strore/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `input.ng-touched.ng-invalid{
      border-color: darkred;
    border-width: 2px;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private store: Store,private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe((s)=>{
      // console.log(s);
      this.auth.isAuthenticated = s["authReducer"].isAuthenticated;
      this.auth.token = s["authReducer"].token;
    });
  }

  OnSignIn(signin: NgForm) {
    // console.log(signin.value);
    this.auth.SignIn(signin.value).subscribe((response) => {
      // localStorage.setItem("token", response.data);
      // this.auth.isAuthenticated = true;
      let auth: Auth = { token: response.data, isAuthenticated: true };
      this.store.dispatch(authAction({ auth }));
    });
  }

  SignOut() {
    // localStorage.removeItem("token");
    // this.auth.isAuthenticated = false;
    let auth: Auth = { token: "", isAuthenticated: false };
    this.store.dispatch(authAction({ auth }));
    this.router.navigate(["/home"]);
  }

}

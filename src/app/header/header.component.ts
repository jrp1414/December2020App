import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  OnSignIn(signin: NgForm) {
    // console.log(signin.value);
    this.auth.SignIn(signin.value).subscribe((response) => {
      localStorage.setItem("token", response.data);
      this.auth.isAuthenticated = true;
    });
  }

  SignOut(){
    localStorage.removeItem("token");
    this.auth.isAuthenticated = false;
  }

}

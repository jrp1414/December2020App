import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit, AfterViewInit  {

  //@ViewChild("form") form;

  constructor(private auth:AuthService,private router:Router) { }
  ngOnInit(): void {
    // console.log(this.form);
  }

  ngAfterViewInit(): void {
    //console.log(this.form);
  }

  // OnSubmit(){
  //   console.log(this.form.value);
  // }

  OnSubmit(form){
    this.auth.SignUp(form.value).subscribe((m)=>{
      this.router.navigate(["/home"]);
    });
  }

}

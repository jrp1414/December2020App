import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit, AfterViewInit  {

  //@ViewChild("form") form;

  constructor() { }
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
    console.log(form);
    // console.log(value);
  }

}

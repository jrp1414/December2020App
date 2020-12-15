import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tb',
  templateUrl: './twoway-binding.component.html',
  styles: []
})
export class TwowayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OneWayMessage: string = "";
  OneWayChange(data) {
    this.OneWayMessage = data.target.value;
  }
  OneWayTest() {
    this.OneWayMessage = "One Way Test Done";
  }
  
  
  TwoWayMessage: string = "";
  TwoWayChange(data:string) {
    this.TwoWayMessage = data.toLowerCase();
  }
  TwoWayTest() {
    this.TwoWayMessage = "Two Way Test Done";
  }
}

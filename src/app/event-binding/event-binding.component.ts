import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent {
  name: string = "Amol";
  Message: string = "";
  constructor() { }

  UpdateName() {
    // debugger;
    this.name = prompt("Enter Name");
  }

  OnMouseEnter() {
    this.Message = "Mouse Entered";
  }
  OnMouseLeave() {
    this.Message = "Mouse Left";
  }

  OnNameChanged(data) {
    // console.log(data.target.value);
    this.Message = data.target.value;
  }

}

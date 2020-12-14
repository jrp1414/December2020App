import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent {
  imgSrc: string = "https://angular.io/assets/images/logos/angular/angular.png";
  buttonDisable: boolean = true;
  constructor() {
    setTimeout(() => {
      this.imgSrc = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
      this.buttonDisable = false;
    }, 5000);
  }

}
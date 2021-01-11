import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[MaxMin]',
  providers:[
    {provide:NG_VALIDATORS,useExisting:MaxMinDirective,multi:true}
  ]
})
export class MaxMinDirective implements Validator {

  @Input("MaxMin") MaxMin: any;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    if (control.value > this.MaxMin.max) {
      return { max: true };
    }
    if (control.value < this.MaxMin.min) {
      return { min: true };
    }
    return null;
  }
}

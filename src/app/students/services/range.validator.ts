import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function Range(min: number,max: number): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
        if (control.value > max || control.value < min) {
            return { range: true };
        }
        return null;
    }
}